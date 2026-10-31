import test from "node:test";
import assert from "node:assert/strict";
import { loadContributionWeeks, parsePublicCalendar } from "./github-activity.mjs";

const cell = (date, level, id, count) => `<td data-date="${date}" id="${id}" data-level="${level}"></td><tool-tip for="${id}">${count} contributions on October 31st.</tool-tip>`;
const html = cell("2026-10-31", 3, "saturday", "1,234") + cell("2026-10-25", 0, "sunday", "No");

test("public calendar sorts row-first markup into weeks with exact counts", () => {
  const weeks = parsePublicCalendar(html);
  assert.equal(weeks.length, 1);
  assert.deepEqual(weeks[0].contributionDays.map((day) => [day.date, day.weekday, day.contributionCount]), [
    ["2026-10-25", 0, 0], ["2026-10-31", 6, 1234],
  ]);
  assert.equal(weeks[0].contributionDays[1].contributionLevel, "THIRD_QUARTILE");
});

test("missing counts and unexpected markup are unavailable, not fabricated zeros", () => {
  assert.equal(parsePublicCalendar('<td data-date="2026-10-31" id="missing" data-level="2"></td>'), null);
  assert.equal(parsePublicCalendar("GitHub temporarily unavailable"), null);
});

test("public calendar is limited to the latest 12 weeks", () => {
  const weeks = parsePublicCalendar(Array.from({ length: 15 }, (_, index) => {
    const date = new Date(Date.UTC(2026, 6, 5 + index * 7)).toISOString().slice(0, 10);
    return cell(date, 1, `week-${index}`, "1");
  }).join(""));
  assert.equal(weeks.length, 12);
  assert.equal(weeks[0].contributionDays[0].date, "2026-07-26");
});

test("without a token it fetches the public calendar without authorization", async () => {
  const weeks = await loadContributionWeeks({ fetchImpl: async (url, options) => {
    assert.equal(url, "https://github.com/users/fyodorrrrr/contributions");
    assert.equal(options.headers.Authorization, undefined);
    return { ok: true, text: async () => html };
  } });
  assert.equal(weeks[0].contributionDays[1].contributionCount, 1234);
});

test("an expired GraphQL token falls back to public data", async () => {
  const calls = [];
  const weeks = await loadContributionWeeks({ token: "test-token", fetchImpl: async (url) => {
    calls.push(url);
    return url.endsWith("graphql") ? { ok: false } : { ok: true, text: async () => html };
  } });
  assert.equal(calls.length, 2);
  assert.ok(weeks);
});

test("valid GraphQL data is preferred; failed public requests stay unavailable", async () => {
  const weeks = [{ contributionDays: [{ date: "2026-10-31" }] }];
  assert.deepEqual(await loadContributionWeeks({ token: "test-token", fetchImpl: async () => ({
    ok: true, json: async () => ({ data: { user: { contributionsCollection: { contributionCalendar: { weeks } } } } }),
  }) }), weeks);
  assert.equal(await loadContributionWeeks({ fetchImpl: async () => { throw new Error("offline"); } }), null);
});

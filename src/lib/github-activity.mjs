export const LEVELS = ["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"];
const USERNAME = "fyodorrrrr";
const CACHE = { revalidate: 3600 };

// GitHub's public calendar supplies both intensity cells and exact counts in tooltips.
// Fail closed if its markup changes; never turn missing data into zero contributions.
export function parsePublicCalendar(html) {
  const counts = new Map();
  for (const match of html.matchAll(/<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/g)) {
    const id = match[1].match(/\bfor="([^"]+)"/)?.[1];
    const value = match[2].trim().match(/^(No|[\d,]+) contributions? on /);
    if (id && value) counts.set(id, value[1] === "No" ? 0 : Number(value[1].replaceAll(",", "")));
  }

  const days = [];
  for (const match of html.matchAll(/<td\b([^>]*)>/g)) {
    const attributes = match[1];
    const date = attributes.match(/\bdata-date="(\d{4}-\d{2}-\d{2})"/)?.[1];
    const id = attributes.match(/\bid="([^"]+)"/)?.[1];
    const level = attributes.match(/\bdata-level="([0-4])"/)?.[1];
    if (!date || level === undefined) continue;
    if (!counts.has(id)) return null;
    const weekday = new Date(`${date}T00:00:00Z`).getUTCDay();
    if (!Number.isInteger(weekday)) return null;
    days.push({ date, weekday, contributionCount: counts.get(id), contributionLevel: LEVELS[Number(level)] });
  }
  if (!days.length) return null;

  const weeks = new Map();
  for (const day of days.sort((a, b) => a.date.localeCompare(b.date))) {
    const sunday = new Date(`${day.date}T00:00:00Z`);
    sunday.setUTCDate(sunday.getUTCDate() - day.weekday);
    const key = sunday.toISOString().slice(0, 10);
    if (!weeks.has(key)) weeks.set(key, { contributionDays: [] });
    weeks.get(key).contributionDays.push(day);
  }
  return [...weeks.values()].slice(-12);
}

export async function loadContributionWeeks({ token, fetchImpl = fetch } = {}) {
  if (token) {
    try {
      const response = await fetchImpl("https://api.github.com/graphql", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ query: `query { user(login: "${USERNAME}") { contributionsCollection { contributionCalendar { weeks { contributionDays { date weekday contributionCount contributionLevel } } } } } }` }),
        next: CACHE,
        signal: AbortSignal.timeout(5000),
      });
      if (response.ok) {
        const result = await response.json();
        const weeks = result.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
        if (!result.errors && Array.isArray(weeks) && weeks.length) return weeks.slice(-12);
      }
    } catch {
      // A missing, expired, or unavailable API token must not hide public activity.
    }
  }

  try {
    const response = await fetchImpl(`https://github.com/users/${USERNAME}/contributions`, {
      headers: { Accept: "text/html", "User-Agent": "Jose-Aquino-Portfolio" },
      next: CACHE,
      signal: AbortSignal.timeout(8000),
    });
    return response.ok ? parsePublicCalendar(await response.text()) : null;
  } catch {
    return null;
  }
}

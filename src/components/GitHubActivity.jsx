const USERNAME = "fyodorrrrr";
const LEVELS = ["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"];

// Keep the sentence's line breaks stable while activity loads or is unavailable.
// No invented cells or contribution values are shown in either state.
export function GitHubActivityPlaceholder() {
  return <span className="masthead-activity masthead-activity--placeholder" aria-hidden="true" />;
}

async function getActivity() {
  if (!process.env.GITHUB_TOKEN) return null;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query { user(login: "${USERNAME}") { contributionsCollection { contributionCalendar { weeks { contributionDays { date weekday contributionCount contributionLevel } } } } } }`,
      }),
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return null;
    const result = await response.json();
    const weeks = result.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
    if (result.errors || !Array.isArray(weeks) || !weeks.length) return null;
    return weeks.slice(-12);
  } catch {
    return null;
  }
}

export default async function GitHubActivity() {
  const weeks = await getActivity();
  if (!weeks) return <GitHubActivityPlaceholder />;

  const days = weeks.flatMap((week) => week.contributionDays);
  const count = days.reduce((total, day) => total + day.contributionCount, 0);
  const description = `${count} GitHub contributions from ${days[0].date} to ${days.at(-1).date}.`;

  return (
    <span
      className="masthead-activity"
      role="img"
      aria-label={description}
      title={description}
    >
      <svg viewBox="0 0 119 69" aria-hidden="true" focusable="false">
        {weeks.flatMap((week, column) => week.contributionDays.map((day) => (
          <rect
            key={day.date}
            x={column * 10}
            y={day.weekday * 10}
            width="9"
            height="9"
            rx="1"
            className={`activity-level-${Math.max(0, LEVELS.indexOf(day.contributionLevel))}`}
            style={{ "--ripple-delay": `${column * 28 + day.weekday * 8}ms` }}
          />
        )))}
      </svg>
    </span>
  );
}

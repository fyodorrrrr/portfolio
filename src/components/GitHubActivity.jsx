import { LEVELS, loadContributionWeeks } from "@/lib/github-activity.mjs";
import ActivityInteraction from "./ActivityInteraction";

// Keep the sentence's line breaks stable while activity loads or is unavailable.
// No invented cells or contribution values are shown in either state.
export function GitHubActivityPlaceholder() {
  return <span className="masthead-activity masthead-activity--placeholder" aria-hidden="true" />;
}

export default async function GitHubActivity() {
  const weeks = await loadContributionWeeks({ token: process.env.GITHUB_TOKEN });
  if (!weeks) return <GitHubActivityPlaceholder />;

  const days = weeks.flatMap((week) => week.contributionDays);
  const count = days.reduce((total, day) => total + day.contributionCount, 0);
  const description = `${count} GitHub contributions from ${days[0].date} to ${days.at(-1).date}.`;

  return (
    <ActivityInteraction description={description}>
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
    </ActivityInteraction>
  );
}

// Pixel silhouette follows Claude Code's terminal mascot, Clawd.
// Reference: https://gist.github.com/minsguy/cbc57fd8317eca82708411970bcd52d8
// Authored SVG geometry; Claude Code's mascot belongs to Anthropic.
export default function ClaudeMascot() {
  return (
    <svg
      className="masthead-claude"
      viewBox="0 0 24 24"
      role="img"
      aria-label="Clawd, the Claude Code mascot"
      shapeRendering="crispEdges"
    >
      <g className="claude-character">
        <path
          fill="var(--claude-mascot, #D97757)"
          d="M5 4h14v3h2v4h2v3h-4v3H5v-3H1v-3h2V7h2Z M5 17h2v4H5Z M9 17h2v3H9Z M13 17h2v3h-2Z M17 17h2v4h-2Z"
        />
        <g className="claude-eyes-rest" fill="var(--ink)">
          <path d="M7 8h2v4H7zM15 8h2v4h-2z" />
        </g>
        <g className="claude-eyes-happy" fill="none" stroke="var(--ink)" strokeWidth="1.5" shapeRendering="geometricPrecision">
          <path d="m6.5 8 2 2-2 2m11-4-2 2 2 2" />
        </g>
      </g>
    </svg>
  );
}

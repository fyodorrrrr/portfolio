"use client";

export default function ActivityInteraction({ description, children }) {
  const ripple = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.currentTarget.querySelectorAll("rect").forEach((cell) => {
      cell.getAnimations().forEach((animation) => animation.cancel());
      const delay = parseFloat(getComputedStyle(cell).getPropertyValue("--ripple-delay")) || 0;
      cell.animate(
        [{ transform: "translateY(0)" }, { transform: "translateY(-3px)", offset: .4 }, { transform: "translateY(0)" }],
        { duration: 420, delay, easing: "cubic-bezier(.2, .7, .2, 1)" }
      );
    });
  };

  return (
    <button type="button" className="masthead-activity" aria-label={`${description} Animate contributions`} title={description} onClick={ripple}>
      {children}
    </button>
  );
}

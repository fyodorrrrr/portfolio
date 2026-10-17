export default function SectionHeading({ children, description }) {
  return (
    <div className="dateline">
      <h2>{children}</h2>
      {description && <p className="dateline-desc">{description}</p>}
    </div>
  );
}

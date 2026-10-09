// Section header: a small note on the left, a large heading on the right whose
// second line (`accent`) is tinted. Shared by the sections that follow this layout.
export default function SectionIntro({ note, accent, children }) {
  return (
    <div className="section-intro">
      <p className="section-intro-note">{note}</p>
      <h2 className="section-intro-title">
        {children}
        {accent && <span>{accent}</span>}
      </h2>
    </div>
  );
}

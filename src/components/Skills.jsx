export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", core: true },
        { name: "Next.js", core: true },
        { name: "Tailwind CSS", core: true },
        { name: "TypeScript" },
        { name: "Flutter" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", core: true },
        { name: "Flask" },
        { name: "MySQL" },
        { name: "Firestore" },
        { name: "REST APIs", core: true },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", core: true },
        { name: "GitHub", core: true },
        { name: "Figma" },
        { name: "VS Code" },
        { name: "Firebase" },
      ],
    },
  ];

  return (
    <section id="skills" className="entry alt" data-reveal>
      <div className="dateline">
        <span className="slash">/</span>
        <h2>skills</h2>
        <span className="rule"></span>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skills-col" key={category.title}>
            <h3 className="eyebrow">{category.title}</h3>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill.name}>
                  <span>{skill.name}</span>
                  {skill.core && <span className="tag mono">CORE</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

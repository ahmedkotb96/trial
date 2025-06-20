const Skills = () => {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React",
    "Tailwind CSS", "Git", "Responsive Design"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-gray-700 rounded-full hover:bg-blue-500 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

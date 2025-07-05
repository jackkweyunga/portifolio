export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "C/C++", "Rust", "Go"]
    },
    {
      title: "Frameworks",
      skills: ["Next.js", "React", "Node.js", "Express.js", "Axum", "FastAPI"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub Actions", "Ansible"]
    },
    {
      title: "Cloud",
      skills: ["AWS", "Azure", "Google Cloud Platform"]
    },
    {
      title: "Security",
      skills: ["OpenSSH", "Security Automation", "Vulnerability Assessment"]
    },
    {
      title: "Electronics",
      skills: ["Arduino", "Raspberry Pi", "ESP32", "Circuit Design", "IoT", "Embedded Systems"]
    },
    {
      title: "Currently Learning",
      skills: ["XR Development", "Unity", "Unreal Engine", "AR/VR", "3D Modeling"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
          Technical Skills
        </h2>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, secure, and scalable applications
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="text-secondary text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
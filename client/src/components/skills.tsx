import { Code, Wrench, Languages } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const programmingSkills = [
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 75 },
  { name: "HTML & CSS", level: 80 },
  { name: "MySQL", level: 70 },
];

const frameworks = [
  { name: "Flask", icon: "🐍" },
  { name: "Streamlit", icon: "📊" },
  { name: "Git", icon: "🔧" },
  { name: "Scikit-Learn", icon: "🤖" },
];

const languages = [
  { name: "English", level: 95, proficiency: "Fluent" },
  { name: "Hindi", level: 100, proficiency: "Native" },
  { name: "Kannada", level: 100, proficiency: "Native" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Programming Languages */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center flex items-center justify-center">
              <Code className="text-primary mr-2" />
              Programming
            </h3>
            <div className="space-y-4">
              {programmingSkills.map((skill) => (
                <div key={skill.name} className="skill-badge bg-background p-4 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center flex items-center justify-center">
              <Wrench className="text-primary mr-2" />
              Frameworks & Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {frameworks.map((framework) => (
                <div key={framework.name} className="skill-badge bg-background p-4 rounded-lg text-center shadow-lg">
                  <div className="text-3xl mb-2">{framework.icon}</div>
                  <div className="font-medium">{framework.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center flex items-center justify-center">
              <Languages className="text-primary mr-2" />
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((language) => (
                <div key={language.name} className="skill-badge bg-background p-4 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-primary">{language.proficiency}</span>
                  </div>
                  <Progress value={language.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

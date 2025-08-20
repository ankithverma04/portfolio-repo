const educationData = [
  {
    degree: "B.E. – Artificial Intelligence and Machine Learning",
    institution: "Ballari Institute of Technology and Management (BITM)",
    grade: "CGPA: 8.28",
    period: "2022 – 2026",
  },
  {
    degree: "XII – Higher Secondary Education",
    institution: "Basavarajeshwari Public School and College",
    grade: "Percentage: 87%",
    period: "2020 – 2022",
  },
  {
    degree: "X – Secondary Education",
    institution: "Satya High School",
    grade: "Percentage: 93%",
    period: "2019 – 2020",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>

            {educationData.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12 fade-in">
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                <div className="ml-20 bg-card rounded-xl shadow-lg p-6 w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{item.degree}</h3>
                      <p className="text-primary font-medium">{item.institution}</p>
                      <p className="text-foreground/70 mt-2">{item.grade}</p>
                    </div>
                    <div className="text-foreground/60 mt-2 md:mt-0">{item.period}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

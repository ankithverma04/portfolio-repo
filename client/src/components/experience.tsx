import { Sprout } from "lucide-react";

export function Experience() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto fade-in">
          <div className="bg-background rounded-xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sprout className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Fresh Graduate & Aspiring Professional</h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Currently a fresher with strong project-based experience; actively seeking internships and opportunities to apply AI/ML skills in real-world applications. Passionate about contributing to innovative teams and making meaningful impact through technology.
            </p>
            <div className="mt-6 inline-flex items-center text-primary font-medium">
              <Sprout className="mr-2 h-5 w-5" />
              Open to Opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

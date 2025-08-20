import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="w-full max-w-md mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl shadow-2xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="w-12 h-12 bg-accent/30 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="w-12 h-12 bg-primary/30 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-xl leading-relaxed text-foreground/80 mb-6">
                I am an aspiring AI/ML Engineer and B.E. student in Artificial Intelligence and Machine Learning at Ballari Institute of Technology and Management. With strong problem-solving abilities and a passion for impactful projects, I aim to contribute to innovative teams and gain industry experience.
              </p>
              <p className="text-lg text-foreground/70">
                Currently focused on building practical AI solutions and expanding my knowledge in machine learning algorithms, web development, and data science. I believe in the power of technology to solve real-world problems and create meaningful impact.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-secondary rounded-xl">
                <div className="text-3xl font-bold text-primary">8.28</div>
                <div className="text-foreground/70">Current CGPA</div>
              </div>
              <div className="text-center p-6 bg-secondary rounded-xl">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-foreground/70">Projects Completed</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

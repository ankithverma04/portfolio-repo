import { Button } from "@/components/ui/button";
import { Download, Mail, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Ankith-Kumar-Verma-Resume.pdf';
    link.download = 'Ankith-Kumar-Verma-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary">
      {/* Modern Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-white rounded-full blur-xl"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-white transform rotate-45 opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-white rounded-full opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-white transform rotate-45 opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-white rounded-full opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in font-poppins">
            Ankith Kumar Verma
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 fade-in">
            Aspiring AI/ML Engineer
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed fade-in">
            Passionate about building AI-powered solutions that bridge ideas and real-world impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in">
            <Button
              onClick={downloadResume}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Connect
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-arrow">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}

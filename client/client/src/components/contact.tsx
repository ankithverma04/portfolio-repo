import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "5007fe84-fc7c-49ce-8534-e8cc5fea74e9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setIsSuccess(true);
        toast({
          title: "Your message has been sent successfully! ✓",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        toast({
          title: "Something went wrong. Please try again.",
          description: data.message || "Please check your internet connection and try again.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("Contact form error:", error);
      setResult("An error occurred. Please try again.");
      toast({
        title: "Something went wrong. Please try again.",
        description: "Please check your internet connection and try again.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ankithverma.04@gmail.com",
      href: "mailto:ankithverma.04@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8310891242",
      href: "tel:+918310891242",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/ankith-kumar-verma",
      href: "https://linkedin.com/in/ankith-kumar-verma",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/ankithverma04",
      href: "https://github.com/ankithverma04",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">Let's Connect</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-xl text-foreground/70 mt-6">Ready to collaborate? Let's discuss how we can work together.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in">
            <div className="space-y-8">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{contact.title}</h3>
                      <a 
                        href={contact.href} 
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary hover:underline"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in">
            {!isSuccess ? (
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Honeypot field for spam protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground/80 mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground/80 mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground/80 mb-2 block">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground/80 mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full"
                    placeholder="Enter your message"
                    required
                  />
                </div>

                {result && (
                  <div className="text-center text-sm font-medium text-primary">
                    {result}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full transition-all duration-300 hover:scale-105"
                  size="lg"
                  disabled={result === "Sending...."}
                >
                  {result === "Sending...." ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <CheckCircle className="h-12 w-12 text-green-600 animate-pulse" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Your message has been sent successfully!</h3>
                <p className="text-foreground/70 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Send Another Message
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

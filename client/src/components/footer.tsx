import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ankith-kumar-verma",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/ankithverma04",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:ankithverma.04@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 font-poppins">Ankith Kumar Verma</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">© 2024 Ankith Kumar Verma. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Trophy, Users, Video, Tag, Award, BookOpen } from "lucide-react";

const achievements = [
  {
    title: "Selected for Super120 Batch",
    description: "Top 900 students selected nationwide",
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
  },
  {
    title: "2nd Place - Short Movie Competition",
    description: "Annual Fest creative competition winner",
    icon: Video,
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
];

const certifications = [
  {
    title: "Python Programming",
    institution: "EZ Training and Technologies",
    period: "April – May 2024",
    icon: BookOpen,
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900/30",
  },
  {
    title: "Data Structures",
    institution: "EZ Training and Technologies",
    period: "February – March 2025",
    icon: Award,
    color: "text-orange-600",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
  },
];

export function Achievements() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Achievements */}
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center">
              <Trophy className="text-primary mr-2" />
              Achievements
            </h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${achievement.bgColor} rounded-full flex items-center justify-center`}>
                        <Icon className={`h-6 w-6 ${achievement.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                        <p className="text-foreground/70">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center">
              <Tag className="text-primary mr-2" />
              Certifications
            </h2>
            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div key={index} className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${cert.bgColor} rounded-full flex items-center justify-center`}>
                        <Icon className={`h-6 w-6 ${cert.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{cert.title}</h3>
                        <p className="text-foreground/70">{cert.institution}</p>
                        <p className="text-sm text-primary mt-1">{cert.period}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

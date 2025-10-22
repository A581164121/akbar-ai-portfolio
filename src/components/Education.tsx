import { Card } from "@/components/ui/card";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "Master in Generative AI Future",
      institution: "Google",
      status: "In Progress"
    },
    {
      degree: "Master in Business Administration Essentials",
      institution: "University of Glasgow, Scotland",
      status: "Completed"
    },
    {
      degree: "Bachelor of Commerce",
      institution: "University of Karachi, Pakistan",
      status: "Completed"
    }
  ];

  const certifications = [
    { name: "Prompt Engineering for LLMs", link: "" },
    { name: "Fundamental of Digital Marketing", link: "https://skillshop.exceedlms.com/student/award/ZeaDVcLAJDLYHS6pBTwtS1gR" },
    { name: "Search Engine Optimization (SEO)", link: "https://www.coursera.org/account/accomplishments/certificate/RL0TJJS5D23K" },
    { name: "Data Science & Analytics", link: "" },
    { name: "Business Communications", link: "" },
    { name: "Inventory Management", link: "" },
    { name: "Customer Relationship Management", link: "" },
    { name: "Social Media Marketing", link: "" },
    { name: "AI for Beginners", link: "" },
    { name: "Planning a Generative AI Project", link: "" }
  ];

  const badges = [
    { name: "Digital Skills Builder", link: "https://www.life-global.org/en/badges/eb7cc2e4-5c7a-4f71-bb37-2fc5a2ed975d" },
    { name: "HP LIFE Ambassador", link: "https://www.life-global.org/en/badges/38e21467-d354-4d90-b073-e2fbcd99639a" },
    { name: "Career Explorer", link: "https://www.life-global.org/en/badges/d3603794-2e00-4c88-9dcb-979487a37d8a" },
    { name: "Operational Aspects", link: "https://www.life-global.org/en/badges/4a459c27-da83-4ff8-ac0e-2aa3305a57cf" },
    { name: "Finance Focus", link: "https://www.life-global.org/en/badges/67943476-648e-4548-8d5f-23ca32e06463" }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-primary" />
            Education
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <Badge className="mb-3 bg-primary/20 text-primary border-primary/50">
                  {edu.status}
                </Badge>
                <h4 className="text-lg font-semibold text-foreground mb-2">{edu.degree}</h4>
                <p className="text-muted-foreground text-sm">{edu.institution}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-secondary" />
            Professional Certifications
          </h3>
          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-background/30 rounded-lg border border-border/30 hover:border-primary/50 transition-colors"
                >
                  <span className="text-foreground text-sm">{cert.name}</span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Badges */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-accent" />
            Achievements & Badges
          </h3>
          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, index) => (
                <a
                  key={index}
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-accent rounded-lg hover:shadow-glow transition-all duration-300"
                >
                  <span className="text-background font-medium text-sm">{badge.name}</span>
                  <ExternalLink className="w-4 h-4 text-background" />
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;

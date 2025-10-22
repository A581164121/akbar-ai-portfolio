import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Code, Lightbulb, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Accounting Skills",
      icon: Calculator,
      color: "primary",
      skills: [
        "General Accounting",
        "Financial Statement Preparation",
        "AP & AR Management",
        "Bookkeeping & Ledger Maintenance",
        "Budgeting & Forecasting",
        "Bank Reconciliation",
        "Payroll Processing",
        "Tax Preparation",
        "Financial Reporting"
      ]
    },
    {
      title: "Technical Skills",
      icon: Code,
      color: "secondary",
      skills: [
        "QuickBooks, Xero, SAP, Oracle",
        "Advanced Excel (Pivot Tables, VLOOKUP, Macros)",
        "Financial Data Analysis",
        "ERP Systems",
        "Python, C++",
        "JavaScript, HTML, CSS, React",
        "AI Tools for Financial Automation"
      ]
    },
    {
      title: "Digital & AI Skills",
      icon: Sparkles,
      color: "accent",
      skills: [
        "AI-Driven Financial Analysis",
        "Content Writing & Blogging",
        "SEO & Keyword Research",
        "Digital Marketing (Google AdSense, Meta Ads)",
        "Social Media Management",
        "AI Content Humanization",
        "Affiliate Marketing"
      ]
    },
    {
      title: "Soft Skills",
      icon: Lightbulb,
      color: "primary",
      skills: [
        "Attention to Detail",
        "Time Management",
        "Problem-Solving",
        "Communication",
        "Team Collaboration",
        "Leadership",
        "Adaptability"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/20 text-primary border-primary/50";
      case "secondary":
        return "bg-secondary/20 text-secondary border-secondary/50";
      case "accent":
        return "bg-accent/20 text-accent border-accent/50";
      default:
        return "bg-primary/20 text-primary border-primary/50";
    }
  };

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${getColorClasses(category.color)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="bg-background/50 border-border/50 hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

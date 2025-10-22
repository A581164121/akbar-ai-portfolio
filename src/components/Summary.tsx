import { Card } from "@/components/ui/card";
import { Brain, TrendingUp, Target } from "lucide-react";

const Summary = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/20 rounded-full">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">AI Transition</h3>
              <p className="text-muted-foreground">
                Pursuing Master's in AI, leveraging analytical skills to drive innovative tech solutions
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-secondary/20 rounded-full">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">10+ Years Experience</h3>
              <p className="text-muted-foreground">
                Proven track record in financial operations, compliance, and strategic planning
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-accent/20 rounded-full">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Digital Expertise</h3>
              <p className="text-muted-foreground">
                Mastering digital marketing, content creation, and AI-driven strategies
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-card border-border/50">
          <div className="prose prose-invert max-w-none">
            <p className="text-foreground/90 leading-relaxed mb-4">
              I am eager to leverage my analytical skills and passion for technology to transition into a new career in 
              <span className="text-primary font-semibold"> Artificial Intelligence (AI)</span>. With a Master's degree in AI in progress, 
              I am gaining expertise in AI-driven tools, data analysis, and digital marketing strategies. My goal is to combine my 
              financial acumen with AI knowledge to contribute to innovative solutions in the tech industry.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Throughout my career, I bring <span className="text-primary font-semibold">over 10 years of experience</span> in financial 
              operations, including tracking and reconciling transactions, managing budgets, and ensuring compliance with industry regulations. 
              I have specialized in areas such as general accounting, financial statements, data entry, accounts payable and receivable, 
              file management, and bookkeeping.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              What sets me apart is my ability to <span className="text-secondary font-semibold">bridge traditional financial expertise 
              with cutting-edge digital skills</span>. I am confident that my diverse experience and proactive approach can help 
              organizations achieve their goals in both financial management and digital innovation.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Summary;

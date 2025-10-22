import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Education />
      
      {/* Footer */}
      <footer className="py-8 px-6 bg-card border-t border-border/50">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2025 Muhammad Akbar Azizi. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with passion for innovation and excellence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

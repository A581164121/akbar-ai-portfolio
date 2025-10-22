import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-accent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <img
                  src={profilePhoto}
                  alt="Muhammad Akbar Azizi"
                  className="relative w-72 h-72 rounded-full object-cover border-4 border-card shadow-glow"
                />
              </div>
            </div>

            {/* Right: Info */}
            <div className="text-center md:text-left space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
                  Muhammad Akbar Azizi
                </h1>
                <p className="text-2xl md:text-3xl text-primary font-semibold mb-2">
                  AI & Digital Transformation Advocate
                </p>
                <p className="text-xl text-muted-foreground italic">
                  From Ledgers to LLMs
                </p>
              </div>

              <div className="space-y-3 text-foreground/90">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Buraydah, Al Qasim, Saudi Arabia</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+966 581164121</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Karachi, Pakistan</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+92 317 5440110</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:infolmakbar@gmail.com" className="hover:text-primary transition-colors">
                    infolmakbar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 justify-center md:justify-start pt-4">
                <Button variant="default" size="lg" asChild className="bg-gradient-accent hover:shadow-glow transition-all duration-300">
                  <a href="https://www.linkedin.com/in/muhammad-akbar-45752470/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                  <a href="https://github.com/A581164121/My-Resume/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-secondary/50 hover:border-secondary hover:bg-secondary/10 transition-all duration-300">
                  <a href="https://muhammad-akbar-azizi-n0a6xmx.gamma.site/" target="_blank" rel="noopener noreferrer">
                    <Globe className="w-5 h-5 mr-2" />
                    Portfolio
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

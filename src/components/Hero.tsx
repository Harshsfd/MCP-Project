import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Model Context Protocol Projects
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">MCP</span>{" "}
            <span className="text-foreground">Project</span>
            <br />
            <span className="text-foreground">Showcase</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore cutting-edge Model Context Protocol implementations from 
            <span className="text-primary font-semibold"> basic tutorials</span> to 
            <span className="text-secondary font-semibold"> advanced applications</span>
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-level-basic/20 border border-level-basic/30">
              <Code2 className="w-4 h-4 text-level-basic" />
              <span className="text-sm font-medium text-level-basic">Code Examples</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-level-intermediate/20 border border-level-intermediate/30">
              <Zap className="w-4 h-4 text-level-intermediate" />
              <span className="text-sm font-medium text-level-intermediate">Live Demos</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-level-advanced/20 border border-level-advanced/30">
              <Sparkles className="w-4 h-4 text-level-advanced" />
              <span className="text-sm font-medium text-level-advanced">Advanced Projects</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link to="/projects">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg"
              >
                Explore Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="group glass-card hover:bg-card/50 transition-all duration-300 px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">15+</div>
              <div className="text-muted-foreground mt-1">MCP Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">3</div>
              <div className="text-muted-foreground mt-1">Skill Levels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-muted-foreground mt-1">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
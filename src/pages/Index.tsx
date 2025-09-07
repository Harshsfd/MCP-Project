import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { mockProjects } from "@/data/mockProjects";

const Index = () => {
  const featuredProjects = mockProjects.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Featured Projects */}
      <section className="py-20 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our handpicked selection of MCP implementations across all skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button size="lg" variant="outline" className="glass-card hover:bg-card/50 group">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose MCP Section */}
      <section className="py-20 bg-gradient-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Learn <span className="gradient-text">MCP</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Model Context Protocol is revolutionizing how applications share and manage context
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-primary/10 mb-6 glow-effect">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">High Performance</h3>
              <p className="text-muted-foreground">
                Optimized for real-time applications with minimal latency and maximum throughput
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-primary/10 mb-6 glow-effect">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Ready</h3>
              <p className="text-muted-foreground">
                Built-in security, scalability, and reliability features for production deployments
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-primary/10 mb-6 glow-effect">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Developer Friendly</h3>
              <p className="text-muted-foreground">
                Clean APIs, comprehensive documentation, and extensive tooling support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers already building amazing applications with MCP
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow px-8 py-4 text-lg">
                <Code2 className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
            </Link>
            
            <Link to="/about">
              <Button size="lg" variant="outline" className="glass-card hover:bg-card/50 px-8 py-4 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

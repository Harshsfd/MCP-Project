import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Users, 
  Zap, 
  Shield, 
  BookOpen, 
  Github, 
  Mail, 
  ExternalLink 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Open Source",
      description: "All projects are open source and available for learning and contribution."
    },
    {
      icon: BookOpen,
      title: "Educational",
      description: "Designed to teach MCP concepts from basic to advanced implementations."
    },
    {
      icon: Zap,
      title: "Modern Tech",
      description: "Built with cutting-edge technologies and best practices."
    },
    {
      icon: Shield,
      title: "Production Ready",
      description: "Includes security, performance, and scalability considerations."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by developers, for developers, with community feedback."
    }
  ];

  const skills = [
    "Python", "JavaScript", "React", "Node.js", "Docker", "Kubernetes",
    "PostgreSQL", "MongoDB", "Redis", "WebSocket", "JWT", "OAuth2"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-primary glow-effect">
                  <Code2 className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="gradient-text">MCP Showcase</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                A comprehensive platform dedicated to showcasing Model Context Protocol (MCP) 
                implementations, from foundational concepts to enterprise-grade solutions. 
                Built to accelerate learning and adoption of MCP technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To democratize access to Model Context Protocol knowledge by providing 
                high-quality, practical implementations that developers can learn from, 
                build upon, and deploy in their own projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="glass-card p-6 text-center group hover:shadow-elevated transition-all duration-300">
                  <div className="inline-flex p-3 rounded-full bg-gradient-primary/10 mb-4 group-hover:bg-gradient-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 bg-gradient-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our projects leverage modern, industry-standard technologies to ensure 
                relevance and applicability in real-world scenarios.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-card/50 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Project Levels */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Learning Path</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our projects are structured in three levels to support your learning journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-card p-8 text-center">
                <Badge className="bg-level-basic/20 text-level-basic border-level-basic/30 mb-4">
                  BASIC
                </Badge>
                <h3 className="text-xl font-semibold mb-3">Foundation</h3>
                <p className="text-muted-foreground mb-4">
                  Learn MCP fundamentals with simple, well-documented examples
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Basic server setup</li>
                  <li>• Simple client connections</li>
                  <li>• Core concepts</li>
                </ul>
              </Card>
              
              <Card className="glass-card p-8 text-center">
                <Badge className="bg-level-intermediate/20 text-level-intermediate border-level-intermediate/30 mb-4">
                  INTERMEDIATE
                </Badge>
                <h3 className="text-xl font-semibold mb-3">Application</h3>
                <p className="text-muted-foreground mb-4">
                  Build practical applications with real-world features
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Database integration</li>
                  <li>• Real-time features</li>
                  <li>• Performance optimization</li>
                </ul>
              </Card>
              
              <Card className="glass-card p-8 text-center">
                <Badge className="bg-level-advanced/20 text-level-advanced border-level-advanced/30 mb-4">
                  ADVANCED
                </Badge>
                <h3 className="text-xl font-semibold mb-3">Enterprise</h3>
                <p className="text-muted-foreground mb-4">
                  Production-ready solutions with advanced architecture
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Microservices architecture</li>
                  <li>• Security implementation</li>
                  <li>• Scalability patterns</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact/CTA */}
        <section className="py-16 bg-gradient-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to dive into Model Context Protocol development? 
              Explore our projects and start building amazing applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                  <Code2 className="w-4 h-4 mr-2" />
                  Browse Projects
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" className="glass-card">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
              
              <Button variant="outline" size="lg" className="glass-card">
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
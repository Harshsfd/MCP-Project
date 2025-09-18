import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Download, 
  ExternalLink, 
  Calendar, 
  Code2, 
  Share2,
  Star,
  GitBranch 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import CodeBlock from "@/components/CodeBlock";
import { getProjectById } from "@/data/mockProjects";
import { useToast } from "@/hooks/use-toast";

const levelColors = {
  basic: "bg-level-basic/20 text-level-basic border-level-basic/30",
  intermediate: "bg-level-intermediate/20 text-level-intermediate border-level-intermediate/30",
  advanced: "bg-level-advanced/20 text-level-advanced border-level-advanced/30",
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-16">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/projects">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // ✅ Updated handleDownload function
  const handleDownload = () => {
    if (!project?.downloadUrl) return;

    const link = document.createElement("a");
    link.href = project.downloadUrl;
    link.download = `${project.title}.${project.language === 'python' ? 'py' : 'txt'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download started!",
      description: `Downloading ${project.title} project files.`,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Project link has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-12 bg-gradient-card border-b border-border/30">
          <div className="container mx-auto px-4">
            <Link to="/projects">
              <Button variant="ghost" className="mb-6 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className={levelColors[project.level]}>
                  {project.level.toUpperCase()}
                </Badge>
                <Badge variant="outline">
                  {project.language}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(project.createdAt).toLocaleDateString()}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                {project.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card className="glass-card p-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <Code2 className="w-5 h-5 mr-2 text-primary" />
                  Project Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </Card>

              {/* Code Example */}
              <Card className="glass-card p-6">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <GitBranch className="w-5 h-5 mr-2 text-primary" />
                  Code Example
                </h2>
                <CodeBlock 
                  code={project.codeSnippet}
                  language={project.language}
                  title={`${project.title} - Main Implementation`}
                />
              </Card>

              {/* Tags */}
              <Card className="glass-card p-6">
                <h2 className="text-xl font-semibold mb-4">Technologies & Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Actions */}
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Project Actions</h3>
                <div className="space-y-3">
                  <Button 
                    onClick={handleDownload}
                    className="w-full bg-gradient-primary hover:shadow-glow"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Project
                  </Button>
                  
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      className="w-full glass-card"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  )}
                  
                  <Button 
                    variant="outline" 
                    className="w-full glass-card"
                    onClick={handleShare}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Project
                  </Button>
                </div>
              </Card>

              {/* Project Stats */}
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Difficulty</span>
                    <Badge className={levelColors[project.level]}>
                      {project.level}
                    </Badge>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Language</span>
                    <span className="font-medium">{project.language}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Created</span>
                    <span className="font-medium">
                      {new Date(project.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Tags</span>
                    <span className="font-medium">{project.tags.length}</span>
                  </div>
                </div>
              </Card>

              {/* Related Projects Placeholder */}
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Similar Projects</h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="text-sm font-medium">Advanced MCP Security</div>
                    <div className="text-xs text-muted-foreground">Advanced • Python</div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="text-sm font-medium">MCP Performance Optimization</div>
                    <div className="text-xs text-muted-foreground">Intermediate • Python</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
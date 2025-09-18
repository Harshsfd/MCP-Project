import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Download, ExternalLink, Eye, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "@/data/mockProjects";

interface ProjectCardProps {
  project: Project;
}

const levelColors = {
  basic: "bg-level-basic/20 text-level-basic border-level-basic/30",
  intermediate: "bg-level-intermediate/20 text-level-intermediate border-level-intermediate/30",
  advanced: "bg-level-advanced/20 text-level-advanced border-level-advanced/30",
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // In a real app, this would trigger the actual download
    console.log(`Downloading: ${project.downloadUrl}`);
  };

  const handleExternalLink = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  return (
    <Card className="group glass-card hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={levelColors[project.level]}>
                {project.level.toUpperCase()}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {project.language}
              </Badge>
            </div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <Code className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs bg-muted/50 hover:bg-muted"
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs bg-muted/50">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(project.createdAt).toLocaleDateString()}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link to={`/projects/${project.id}`} className="flex-1">
            <Button className="w-full group/btn bg-gradient-primary hover:shadow-glow">
              <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
              View Details
            </Button>
          </Link>
          
{/* Description 
          <Button
            variant="outline"
            size="icon"
            onClick={handleDownload}
            className="glass-card hover:bg-card/50"
          >
            <Download className="w-4 h-4" />
          </Button> */}
          
          {project.githubUrl && (
            <Button
              variant="outline"
              size="icon"
              onClick={handleExternalLink}
              className="glass-card hover:bg-card/50"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Hover Effect Gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
    </Card>
  );
};

export default ProjectCard;
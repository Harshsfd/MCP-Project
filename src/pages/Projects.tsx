import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Code2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { mockProjects } from "@/data/mockProjects";

// ✅ JSON download function
const downloadProjectData = (project: any) => {
  const fileData = JSON.stringify(project, null, 2);
  const blob = new Blob([fileData], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${project.title.replace(/\s+/g, "_")}.json`;
  link.click();
};

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const levels = [
    { value: "basic", label: "Basic", color: "bg-level-basic/20 text-level-basic border-level-basic/30" },
    { value: "intermediate", label: "Intermediate", color: "bg-level-intermediate/20 text-level-intermediate border-level-intermediate/30" },
    { value: "advanced", label: "Advanced", color: "bg-level-advanced/20 text-level-advanced border-level-advanced/30" },
  ];

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    mockProjects.forEach(project => {
      project.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return mockProjects.filter(project => {
      const matchesSearch = !searchQuery || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesLevel = !selectedLevel || project.level === selectedLevel;
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => project.tags.includes(tag));
      
      return matchesSearch && matchesLevel && matchesTags;
    });
  }, [searchQuery, selectedLevel, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLevel(null);
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Header Section */}
        <section className="py-16 bg-gradient-card border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-primary glow-effect">
                  <Code2 className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">MCP Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive collection of Model Context Protocol implementations, 
                from beginner tutorials to enterprise-grade solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 glass-card"
                  />
                </div>
              </div>

              {/* Level Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
                  <Filter className="w-4 h-4 mr-2" />
                  Levels:
                </span>
                {levels.map((level) => (
                  <Badge
                    key={level.value}
                    className={`cursor-pointer transition-all ${
                      selectedLevel === level.value
                        ? level.color
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                    onClick={() => setSelectedLevel(
                      selectedLevel === level.value ? null : level.value
                    )}
                  >
                    {level.label}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tags Filter */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Tags:</span>
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/20"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Active Filters */}
            {(selectedLevel || selectedTags.length > 0 || searchQuery) && (
              <div className="mt-4 flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <Badge variant="secondary">Search: {searchQuery}</Badge>
                  )}
                  {selectedLevel && (
                    <Badge variant="secondary">Level: {selectedLevel}</Badge>
                  )}
                  {selectedTags.map(tag => (
                    <Badge key={tag} variant="secondary">Tag: {tag}</Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Clear all
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">
                {filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''} Found
              </h2>
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="glass-card p-4 rounded-lg shadow">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>

                    <div className="flex gap-2 mt-4">
                      {/* GitHub link */}
                      <Button asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>

                      {/* ✅ Download JSON */}
                      <Button onClick={() => downloadProjectData(project)}>
                        Download JSON
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or clearing the filters.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
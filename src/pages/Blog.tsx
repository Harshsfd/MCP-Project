import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useState } from "react";

// ✅ Import images from src/data
import Blog1 from "@/data/Blog1.jpg";
import Blog2 from "@/data/Blog2.jpg";
import Blog3 from "@/data/Blog3.jpg";
import Blog4 from "@/data/Blog4.jpg";
import Blog5 from "@/data/Blog5.jpg";
import Blog6 from "@/data/Blog6.jpg";

const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Model Context Protocol",
    excerpt:
      "A comprehensive introduction to MCP concepts, architecture, and implementation patterns for modern applications.",
    category: "Tutorial",
    readTime: "8 min read",
    publishDate: "2024-01-28",
    featured: true,
    imageUrl: Blog1,
  },
  {
    id: "2",
    title: "Building Scalable MCP Applications",
    excerpt:
      "Learn advanced patterns for building production-ready MCP systems that can handle enterprise-scale workloads.",
    category: "Advanced",
    readTime: "12 min read",
    publishDate: "2024-01-25",
    imageUrl: Blog2,
  },
  {
    id: "3",
    title: "MCP Security Best Practices",
    excerpt:
      "Essential security considerations when implementing Model Context Protocol in production environments.",
    category: "Security",
    readTime: "10 min read",
    publishDate: "2024-01-22",
    imageUrl: Blog3,
  },
  {
    id: "4",
    title: "Integrating MCP with Modern Databases",
    excerpt:
      "Comprehensive guide to connecting your MCP servers with PostgreSQL, MongoDB, and Redis for persistent context storage.",
    category: "Integration",
    readTime: "15 min read",
    publishDate: "2024-01-20",
    imageUrl: Blog4,
  },
  {
    id: "5",
    title: "Performance Optimization for MCP Systems",
    excerpt:
      "Techniques and strategies to optimize your MCP implementation for maximum throughput and minimal latency.",
    category: "Performance",
    readTime: "11 min read",
    publishDate: "2024-01-18",
    imageUrl: Blog5,
  },
  {
    id: "6",
    title: "MCP Design Patterns and Architecture",
    excerpt:
      "Explore common design patterns and architectural approaches for building maintainable MCP applications.",
    category: "Architecture",
    readTime: "9 min read",
    publishDate: "2024-01-15",
    imageUrl: Blog6,
  },
];

const categories = [
  "All",
  "Tutorial",
  "Advanced",
  "Security",
  "Integration",
  "Performance",
  "Architecture",
];

const Blog = () => {
  // ✅ Newsletter states
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  // ✅ Handle Subscribe
  const handleSubscribe = async () => {
    if (!email) {
      setStatus("Please enter a valid email");
      return;
    }

    try {
      const response = await fetch(import.meta.env.VITE_GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (result.result === "success") {
        setStatus("You’ve successfully subscribed to our newsletter!");
        setEmail("");
      } else {
        setStatus("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setStatus("Unable to connect to the server. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Header */}
        <section className="py-16 bg-gradient-card border-b border-border/30">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-primary glow-effect">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">MCP</span> Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In-depth tutorials, best practices, and insights about Model
              Context Protocol development from our team and community
              contributors.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/20 transition-colors px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.find((post) => post.featured) && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Featured Article</h2>
                <p className="text-muted-foreground">
                  Don't miss our latest comprehensive guide
                </p>
              </div>

              {(() => {
                const featuredPost = blogPosts.find((post) => post.featured)!;
                return (
                  <Card className="glass-card p-8 hover:shadow-elevated transition-all duration-300 group cursor-pointer">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                          Featured
                        </Badge>
                        <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(
                              featuredPost.publishDate
                            ).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readTime}
                          </div>
                          <Badge variant="outline">
                            {featuredPost.category}
                          </Badge>
                        </div>
                        <Button className="bg-gradient-primary hover:shadow-glow group">
                          Read Article
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                      {/* ✅ Featured Image */}
                      <div className="h-64 rounded-lg overflow-hidden">
                        <img
                          src={featuredPost.imageUrl}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </Card>
                );
              })()}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8">All Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <Card
                    key={post.id}
                    className="glass-card overflow-hidden group hover:shadow-elevated transition-all duration-300 cursor-pointer"
                  >
                    {/* ✅ Blog Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6">
                      <Badge variant="outline" className="mb-3 text-xs">
                        {post.category}
                      </Badge>

                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-card border-t border-border/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get notified when we publish new MCP tutorials, guides, and
              insights. Join our growing community of developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-card/50 border border-border/30 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                onClick={handleSubscribe}
                className="bg-gradient-primary hover:shadow-glow"
              >
                Subscribe
              </Button>
            </div>

            {/* Status message */}
            {status && (
              <p className="mt-4 text-sm text-muted-foreground">{status}</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
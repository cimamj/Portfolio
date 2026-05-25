"use client";

import { ExternalLink, Github, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Advanced Library Management System",
    description:
      "A robust, production-ready backend system for student book loans. Features optimized data fetching via caching and pagination, a centralized Global Exception Handling middleware for rock-solid stability, and integration with external third-party services.",
    tech: [
      ".NET",
      "Clean Architecture",
      "Dapper",
      "SQL",
      "In-Memory Caching",
      "Pagination",
      "Global Exception Handling",
      "External API Integration",
    ],
    featured: true,
    links: {
      github: "https://github.com/cimamj/CleanCodeLibrary",
    },
  },
  {
    title: "FlexLog",
    description:
      "A responsive web application built for the User Interfaces course. Includes user authentication and performance tracking for exercises, weights, and repetitions.",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "Supabase"],
    featured: false,
    links: {
      github: "https://github.com/Matutinovic/KorisnickaSucelja",
      live: "https://flexlog.vercel.app",
    },
  },
  {
    title: "Smart Task Manager",
    description:
      "A task management API built to master N-Tier architecture, strict separation of concerns, and SOLID principles.",
    tech: [".NET", "N-Tier Architecture", "C#"],
    featured: false,
    links: {
      github: "https://github.com/cimamj/todo-app-backend",
      githubSecond: "https://github.com/cimamj/todo-app-frontend",
    },
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-pretty">
              A selection of projects showcasing my expertise in backend
              development, full-stack applications, and architectural patterns
              like Clean and N-tier.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col animate-in fade-in slide-in-from-bottom-4 ${
                  project.featured
                    ? "md:col-span-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent"
                    : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <Star className="h-5 w-5 text-primary fill-primary" />
                      )}
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          Featured Project
                        </Badge>
                      )}
                      {project.badge && (
                        <Badge
                          variant="outline"
                          className="text-muted-foreground"
                        >
                          {project.badge}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3 flex-wrap">
                  {project.links.github && (
                    <Button
                      variant={project.featured ? "default" : "outline"}
                      size="sm"
                      asChild
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        {project.links.githubSecond
                          ? "View GitHub Backend Code"
                          : "View GitHub Code"}
                      </a>
                    </Button>
                  )}
                  {project.links.githubSecond && (
                    <Button
                      variant={project.featured ? "default" : "outline"}
                      size="sm"
                      asChild
                    >
                      <a
                        href={project.links.githubSecond}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View GitHub Frontend Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

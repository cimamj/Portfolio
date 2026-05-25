"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Layout, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    skills: [".NET", "C#", "Prisma"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["Next.js", "React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Tools & Databases",
    icon: Database,
    skills: [
      "PostgreSQL",
      "Git",
      "Supabase",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-card/30 relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-pretty">
              A comprehensive toolkit spanning backend systems, modern frontend
              frameworks, and essential development tools.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

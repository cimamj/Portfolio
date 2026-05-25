"use client";

import { GraduationCap, Dumbbell, Target, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code2,
    title: "Early Start",
    description:
      "Started coding in high school through a DUMP community C# course",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "All exams passed, currently finishing Master's Thesis at FESB",
  },
  {
    icon: Dumbbell,
    title: "Disciplined Athlete",
    description: "Street workout, gym training",
  },
  {
    icon: Target,
    title: "Focused Mindset",
    description: "High discipline and focus transferred from sports to coding",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
              <p className="text-muted-foreground leading-relaxed text-pretty">
                My journey into programming began in an unexpected place — the
                3rd grade of Gimnazija Marka Marulića, a general high school in
                Split. Through a local
                <span className="text-primary font-medium">
                  {" "}
                  DUMP community
                </span>{" "}
                4-day C# basics course, I discovered something that would change
                my life.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                I aced the homework assignments and realized I had a natural
                knack for logic and problem-solving. That moment of clarity led
                me to pursue Computing at
                <span className="text-primary font-medium"> FESB, Split</span>
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Today, I&apos;ve{" "}
                <span className="text-foreground font-medium">
                  passed all my exams
                </span>{" "}
                and am currently finishing my Master&apos;s Thesis. My passion
                for sports — from street workout sessions on Marjan hill to the
                tactical patience required in fishing — has taught me the
                value of{" "}
                <span className="text-primary font-medium">
                  discipline, consistency, and focus
                </span>
                . These qualities now drive my approach to software development.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-4 duration-700 delay-400">
              {highlights.map((item, index) => (
                <Card
                  key={item.title}
                  className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

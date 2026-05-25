"use client";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-card/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="mt-6 text-muted-foreground text-pretty animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              I&apos;m currently looking for new opportunities. Whether you have
              a question or just want to say hi, I&apos;ll do my best to get
              back to you!
            </p>
          </div>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <Button size="lg" asChild>
              <a href="mailto:cimameruj@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Say Hello
              </a>
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/cimamj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/jure-mami%C4%87-565803411/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <MapPin className="h-4 w-4" />
            <span>Split, Croatia</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="text-center sm:text-left">
            Based in Split, Croatia.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

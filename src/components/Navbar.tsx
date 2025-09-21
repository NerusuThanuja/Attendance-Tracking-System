import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
          <span className="text-xl font-bold text-foreground">AttendanceTrack Pro</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">Features</a>
          <a href="#technology" className="text-muted-foreground hover:text-foreground transition-smooth">Technology</a>
          <a href="#demo" className="text-muted-foreground hover:text-foreground transition-smooth">Demo</a>
          <Button variant="default" className="bg-gradient-primary hover:shadow-glow">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
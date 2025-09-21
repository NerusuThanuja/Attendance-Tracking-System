import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold text-foreground">AttendanceTrack Pro</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Revolutionizing workforce management with intelligent attendance tracking, 
              comprehensive analytics, and seamless integration capabilities.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Features</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">Real-time Tracking</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Analytics Dashboard</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Employee Management</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Automated Reports</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">API Reference</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Installation Guide</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Support</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 AttendanceTrack Pro. Built with modern web technologies.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-smooth">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
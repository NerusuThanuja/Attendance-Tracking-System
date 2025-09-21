import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Download, Github } from "lucide-react";

const Demo = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-30"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Experience the power of AttendanceTrack Pro with our interactive demo and explore the source code
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:shadow-glow transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="mb-6 p-4 bg-white/20 rounded-full w-fit mx-auto">
                <ExternalLink className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Live Demo</h3>
              <p className="text-purple-100 mb-6">
                Try the full system with sample data and explore all features
              </p>
              <Button variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100">
                Launch Demo
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:shadow-glow transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="mb-6 p-4 bg-white/20 rounded-full w-fit mx-auto">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Documentation</h3>
              <p className="text-purple-100 mb-6">
                Complete setup guide and API documentation
              </p>
              <Button variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100">
                Download PDF
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:shadow-glow transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="mb-6 p-4 bg-white/20 rounded-full w-fit mx-auto">
                <Github className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Source Code</h3>
              <p className="text-purple-100 mb-6">
                Access the complete project repository on GitHub
              </p>
              <Button variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100">
                View on GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Demo;
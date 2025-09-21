import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techStack = {
  frontend: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  backend: ["Node.js", "Express", "MongoDB", "JWT Auth"],
  features: ["Real-time Updates", "REST API", "Data Analytics", "Cloud Storage"],
  security: ["SSL Encryption", "Role-based Access", "Data Backup", "GDPR Compliant"]
};

const Technology = () => {
  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge technologies for optimal performance, security, and scalability
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-gradient-card border-border hover:shadow-card transition-smooth">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Frontend</h3>
              <div className="space-y-2">
                {techStack.frontend.map((tech, index) => (
                  <Badge key={index} variant="outline" className="w-full justify-center border-primary/50 text-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border hover:shadow-card transition-smooth">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Backend</h3>
              <div className="space-y-2">
                {techStack.backend.map((tech, index) => (
                  <Badge key={index} variant="outline" className="w-full justify-center border-primary/50 text-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border hover:shadow-card transition-smooth">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Features</h3>
              <div className="space-y-2">
                {techStack.features.map((tech, index) => (
                  <Badge key={index} variant="outline" className="w-full justify-center border-primary/50 text-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border hover:shadow-card transition-smooth">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Security</h3>
              <div className="space-y-2">
                {techStack.security.map((tech, index) => (
                  <Badge key={index} variant="outline" className="w-full justify-center border-primary/50 text-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Technology;
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, BarChart3, Calendar, FileText, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description: "Monitor attendance instantly with live updates and notifications for late arrivals or early departures."
  },
  {
    icon: Users,
    title: "Employee Management",
    description: "Comprehensive employee profiles with attendance history, performance metrics, and detailed records."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Powerful reporting tools with customizable dashboards and data visualization for insights."
  },
  {
    icon: Calendar,
    title: "Schedule Management",
    description: "Flexible scheduling system with shift planning, time-off requests, and calendar integration."
  },
  {
    icon: FileText,
    title: "Automated Reports",
    description: "Generate detailed attendance reports automatically with export options in multiple formats."
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with data encryption and compliance with labor regulations."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to streamline attendance management and boost productivity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-smooth group cursor-pointer">
                <CardContent className="p-8">
                  <div className="mb-6 p-3 bg-gradient-primary rounded-lg w-fit group-hover:shadow-glow transition-smooth">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
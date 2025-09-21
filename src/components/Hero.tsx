import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Smart Attendance
            <span className="block bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
              Tracking System
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Revolutionary workforce management with real-time monitoring, automated reporting, and comprehensive analytics. Transform how you track attendance today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 hover:shadow-glow text-lg px-8 py-4">
              Try Live Demo
              <Play className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              View Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <Card className="bg-gradient-card border-white/20 shadow-glow overflow-hidden">
            <img 
              src={heroImage} 
              alt="AttendanceTrack Pro Dashboard Interface"
              className="w-full h-auto rounded-lg"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
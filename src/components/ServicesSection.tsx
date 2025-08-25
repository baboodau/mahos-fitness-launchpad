import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Workout Plans",
      description: "Tailored training programs designed specifically for your goals, fitness level, and schedule.",
      features: [
        "Progressive overload programming",
        "Exercise video demonstrations", 
        "Flexible scheduling options",
        "Equipment modifications available"
      ]
    },
    {
      title: "Nutrition Guidance", 
      description: "Simple, sustainable meal strategies that fit your lifestyle and preferences.",
      features: [
        "Personalized macro targets",
        "Meal planning templates",
        "Restaurant & travel guides",
        "Supplement recommendations"
      ]
    },
    {
      title: "Weekly Check-ins",
      description: "Regular progress tracking and plan adjustments to keep you on track.",
      features: [
        "Progress photo analysis",
        "Measurement tracking",
        "Program adjustments",
        "Direct coaching support"
      ]
    }
  ];

  return (
    <section className="py-20 subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What You Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to transform your body in 90 days, backed by science 
              and proven with hundreds of successful transformations.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="soft-shadow hover:strong-shadow smooth-transition animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Card */}
          <Card className="max-w-md mx-auto strong-shadow animate-scale-in">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl text-primary">Complete Transformation Package</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">$297</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              
              <div className="bg-accent p-4 rounded-lg mb-6">
                <p className="text-sm font-semibold text-primary">🎯 90-Day Transformation Guarantee</p>
                <p className="text-xs text-muted-foreground mt-1">
                  See results in 90 days or get your money back
                </p>
              </div>
              
              <Button variant="cta" size="lg" className="w-full mb-4">
                Start Your Transformation
              </Button>
              
              <Button variant="outline" size="lg" className="w-full">
                Book a Free Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
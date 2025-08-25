import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import transformationsImg from "@/assets/transformations.jpg";

const TransformationsSection = () => {
  const testimonials = [
    {
      name: "Alex M.",
      result: "Lost 25lbs, Gained Confidence",
      quote: "I went from feeling embarrassed to take my shirt off to being proud of my physique. Mahos helped me build sustainable habits that I'll keep for life.",
      timeframe: "12 weeks"
    },
    {
      name: "Sarah K.", 
      result: "Transformed Body & Mindset",
      quote: "Not only did I get the lean, toned body I wanted, but I also developed a healthy relationship with food and exercise. Best investment I've ever made.",
      timeframe: "16 weeks"
    },
    {
      name: "Mike D.",
      result: "Built Muscle, Lost Fat",
      quote: "I thought I needed to choose between building muscle or losing fat. Mahos showed me how to do both simultaneously. The results speak for themselves.",
      timeframe: "20 weeks"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Client Transformations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real people, real results. See how my clients have transformed their 
              bodies and lives in just 90 days.
            </p>
          </div>

          {/* Transformation Image */}
          <div className="mb-16 animate-fade-in-up">
            <img 
              src={transformationsImg} 
              alt="Client transformation results"
              className="w-full max-w-4xl mx-auto rounded-lg soft-shadow"
            />
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="soft-shadow hover:strong-shadow smooth-transition animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg text-primary">{testimonial.name}</h3>
                    <p className="text-sm text-success font-medium">{testimonial.result}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.timeframe}</p>
                  </div>
                  
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-primary rounded-lg p-8 text-center text-primary-foreground animate-scale-in">
            <h3 className="text-2xl font-bold mb-8">Proven Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-4xl font-bold">500+</p>
                <p className="text-sm opacity-90">Clients Coached</p>
              </div>
              <div>
                <p className="text-4xl font-bold">95%</p>
                <p className="text-sm opacity-90">Success Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold">90</p>
                <p className="text-sm opacity-90">Day Programs</p>
              </div>
              <div>
                <p className="text-4xl font-bold">4.9</p>
                <p className="text-sm opacity-90">Average Rating</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Be the Next Success Story?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of others who have transformed their bodies and lives. 
              Your 90-day transformation starts with one click.
            </p>
            <Button variant="cta" size="lg" className="mr-4">
              Apply for Coaching
            </Button>
            <Button variant="outline" size="lg">
              View More Results
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
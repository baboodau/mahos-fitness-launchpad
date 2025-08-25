import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import coachPhoto from "@/assets/coach-photo.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Side */}
            <div className="animate-fade-in-up">
              <div className="relative">
                <img 
                  src={coachPhoto} 
                  alt="Mahos - Fitness Coach"
                  className="w-full max-w-md mx-auto rounded-lg soft-shadow"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg strong-shadow">
                  <p className="font-semibold">5+ Years Experience</p>
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About Me
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  I know exactly how you feel because I've been there. Three years ago, 
                  I was the definition of "skinny fat" - looked okay in clothes but felt 
                  weak, had no muscle definition, and struggled with confidence.
                </p>
                
                <p>
                  After trying countless programs that didn't work, I discovered the 
                  science-backed approach that changed everything. I went from 18% body fat 
                  to 12%, gained 15 pounds of lean muscle, and completely transformed my 
                  relationship with fitness.
                </p>
                
                <p>
                  Now I help others achieve the same transformation. My approach isn't about 
                  extreme diets or spending hours in the gym - it's about smart, sustainable 
                  strategies that fit your life.
                </p>
              </div>
              
              <Card className="mt-8 soft-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">My Transformation</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary">-6%</p>
                      <p className="text-sm text-muted-foreground">Body Fat</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">+15lbs</p>
                      <p className="text-sm text-muted-foreground">Lean Muscle</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">90</p>
                      <p className="text-sm text-muted-foreground">Days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8">
                <Button variant="cta" size="lg">
                  Apply for Coaching
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
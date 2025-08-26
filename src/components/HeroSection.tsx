import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Fitness transformation background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Body
            <span className="block text-blue-300">in 90 Days</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Go from skinny fat to lean & strong with personalized coaching,
            custom workout plans, and proven nutrition strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              asChild
              className="text-lg px-8 py-4 animate-scale-in"
            >
              <a href="https://calendly.com/mahmoudfatanahas/30min" target="_blank">
                Start Coaching Today
              </a>
            </Button>

            <Button
              variant="outline-white"
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <a href="https://calendly.com/mahmoudfatanahas/30min" target="_blank">
                Book a Free Call
              </a>
            </Button>
          </div>

          <div className="mt-12 text-white/80">
            <p className="text-sm">
              Join 500+ clients who transformed their bodies
            </p>
            <div className="flex justify-center mt-4 space-x-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
              <span className="ml-2 text-sm">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

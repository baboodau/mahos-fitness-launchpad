import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">MahosFitness</h3>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Transform your body in 90 days with personalized coaching, 
                custom workout plans, and proven nutrition strategies.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:coach@mahosfitness.com" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">
                  coach@mahosfitness.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#about" className="hover:text-primary-foreground smooth-transition">About Me</a></li>
                <li><a href="#services" className="hover:text-primary-foreground smooth-transition">What You Get</a></li>
                <li><a href="#transformations" className="hover:text-primary-foreground smooth-transition">Transformations</a></li>
                <li><a href="#coaching" className="hover:text-primary-foreground smooth-transition">Apply for Coaching</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="/privacy" className="hover:text-primary-foreground smooth-transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-primary-foreground smooth-transition">Terms of Service</a></li>
                <li><a href="/refund" className="hover:text-primary-foreground smooth-transition">Refund Policy</a></li>
                <li><a href="/contact" className="hover:text-primary-foreground smooth-transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <Separator className="bg-primary-foreground/20 mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/80 text-sm">
            <p>© 2025 MahosFitness. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>🔒 SSL Secured</span>
              <span>✅ Stripe Verified</span>
              <span>⭐ 4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
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
                <a
                  href="mailto:coach@mahosfitness.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition"
                >
                  coach@mahosfitness.com
                </a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-primary-foreground smooth-transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-primary-foreground smooth-transition"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/refund"
                    className="hover:text-primary-foreground smooth-transition"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-primary-foreground smooth-transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-primary-foreground/20 mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/80 text-sm">
            <p>{new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

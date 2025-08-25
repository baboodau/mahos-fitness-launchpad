import { Card, CardContent } from "@/components/ui/card";
import { Shield, CreditCard, Lock } from "lucide-react";

const PaymentSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Security Header */}
          <div className="mb-12 animate-fade-in-up">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Secure & Trusted Payment
            </h2>
            <p className="text-muted-foreground">
              Your payment information is protected with bank-level security
            </p>
          </div>

          {/* Payment Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="soft-shadow animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <CreditCard className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Multiple Payment Options</h3>
                <p className="text-sm text-muted-foreground">
                  Visa, MasterCard, American Express, and PayPal accepted
                </p>
              </CardContent>
            </Card>

            <Card className="soft-shadow animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <Lock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">SSL Encrypted</h3>
                <p className="text-sm text-muted-foreground">
                  256-bit SSL encryption protects your sensitive information
                </p>
              </CardContent>
            </Card>

            <Card className="soft-shadow animate-fade-in-up">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Money-Back Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  90-day transformation guarantee or full refund
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Payment Logos */}
          <div className="animate-fade-in-up">
            <p className="text-sm text-muted-foreground mb-4">Trusted by thousands, secured by</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {/* Stripe Logo */}
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded font-bold text-sm">
                stripe
              </div>
              
              {/* Visa Logo */}
              <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold text-sm">
                VISA
              </div>
              
              {/* MasterCard Logo */}
              <div className="bg-red-500 text-white px-4 py-2 rounded font-bold text-sm">
                MasterCard
              </div>
              
              {/* PayPal Logo */}
              <div className="bg-blue-500 text-white px-4 py-2 rounded font-bold text-sm">
                PayPal
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <main>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms of Service for MahosFitness
        </h1>
        <p className="text-lg font-semibold mb-4">
          Effective Date: August 26, 2025
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using MahosFitness services, you agree to these
            Terms of Service. If you do not agree, you must not use our
            services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">2. Services Provided</h2>
          <p>
            MahosFitness provides fitness coaching services, including
            personalized workout plans, nutrition advice, and consultation
            sessions. Services are delivered online or in-person, as specified
            at purchase.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">3. Eligibility</h2>
          <p>
            You must be at least 18 years old or have parental consent to use
            our services. You confirm that any health information provided is
            accurate and that you are physically capable of participating in
            fitness activities.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            4. User Responsibilities
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Provide accurate and complete information during registration and
              consultations.
            </li>
            <li>
              Follow coaching instructions and consult a medical professional
              before starting any fitness program.
            </li>
            <li>Maintain the confidentiality of your account credentials.</li>
            <li>Notify us immediately of any unauthorized account use.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">5. Payment and Fees</h2>
          <p>
            Services are subject to fees as outlined at purchase. Payments are
            processed through third-party providers. All fees are non-refundable
            unless otherwise stated.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            6. Cancellations and Refunds
          </h2>
          <p>
            You may cancel your subscription or sessions as per the terms
            provided at purchase. Refunds are not guaranteed and are subject to
            our discretion, except where required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            7. Intellectual Property
          </h2>
          <p>
            All content provided by MahosFitness, including workout plans,
            nutrition guides, and website materials, is our property or licensed
            to us. You may not reproduce, distribute, or modify this content
            without written permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            8. Limitation of Liability
          </h2>
          <p>
            MahosFitness is not liable for any injuries, damages, or losses
            resulting from the use of our services. You participate at your own
            risk. Our services are provided "as is" without warranties of any
            kind.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">9. Termination</h2>
          <p>
            We may terminate or suspend your access to our services for
            violating these terms, non-payment, or at our discretion with
            notice. You may terminate your use of our services at any time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">10. Governing Law</h2>
          <p>
            These terms are governed by the laws of [insert jurisdiction]. Any
            disputes will be resolved in the courts of [insert jurisdiction].
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            11. Changes to These Terms
          </h2>
          <p>
            We may update these terms periodically. Changes will be posted on
            our website with an updated effective date. Continued use of our
            services constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">12. Contact Us</h2>
          <p>For questions or concerns:</p>
          <p>Email: mahosfitness@icloud.com</p>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default TermsOfService;

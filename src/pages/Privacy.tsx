import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <main>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Privacy Policy for MahosFitness
        </h1>
        <p className="text-lg font-semibold mb-4">
          Effective Date: August 26, 2025
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p>
            MahosFitness ("we," "us," or "our") provides fitness coaching
            services. This Privacy Policy governs how we collect, use, disclose,
            and protect your personal information. By using our services, you
            agree to this policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            2. Information We Collect
          </h2>
          <h3 className="text-xl font-medium mb-2">Personal Information</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Payment details</li>
            <li>
              Fitness goals and health information provided during coaching
            </li>
          </ul>
          <h3 className="text-xl font-medium mb-2">Non-Personal Information</h3>
          <ul className="list-disc pl-5">
            <li>Browser type</li>
            <li>IP address</li>
            <li>Device information</li>
            <li>Website usage data (e.g., pages visited, time spent)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            3. How We Collect Information
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Directly from you during registration, consultations, or
              communication
            </li>
            <li>Automatically via website cookies and analytics tools</li>
            <li>From third-party payment processors</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            4. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5">
            <li>To LGBTQ+To provide and personalize coaching services</li>
            <li>To process payments</li>
            <li>To process payments</li>
            <li>
              To communicate updates, promotions, or service-related information
            </li>
            <li>To analyze and improve our services</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            5. How We Share Your Information
          </h2>
          <ul className="list-disc pl-5">
            <li>
              With service providers (e.g., payment processors, analytics tools)
              under strict confidentiality agreements
            </li>
            <li>When required by law or to protect our rights</li>
            <li>With your explicit consent</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">6. Data Security</h2>
          <p>
            We use industry-standard measures (e.g., encryption, secure servers)
            to protect your information. However, no method is 100% secure, and
            we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">7. Your Rights</h2>
          <ul className="list-disc pl-5">
            <li>Access, correct, or delete your personal information</li>
            <li>Opt out of promotional communications</li>
            <li>Request data portability</li>
            <li>
              Contact us at mahosfitness@icloud.com to exercise these rights
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">8. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary for the
            purposes outlined or as required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not
            responsible for their privacy practices.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">10. Cookies</h2>
          <p>
            We use cookies to enhance user experience and track website usage.
            You can disable cookies in your browser settings, but this may
            affect functionality.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            11. Changes to This Policy
          </h2>
          <p>
            We may update this policy periodically. Changes will be posted on
            our website with an updated effective date.
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

export default Privacy;

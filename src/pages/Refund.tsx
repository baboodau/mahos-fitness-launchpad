import Footer from "@/components/Footer";

const Refund = () => {
  return (
    <main>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Refund Policy for MahosFitness
        </h1>
        <p className="text-lg font-semibold mb-4">
          Effective Date: August 26, 2025
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">1. Overview</h2>
          <p>
            MahosFitness is committed to your satisfaction with our fitness
            coaching services. This Refund Policy outlines the conditions under
            which you may request a refund.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">2. Refund Eligibility</h2>
          <p>You may request a refund under the following conditions:</p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Within 24 Hours of Contract:</strong> A full refund is
              available if you request it within 24 hours of signing the service
              contract, provided no coaching sessions or materials have been
              provided.
            </li>
            <li>
              <strong>Non-Achievement of Goals:</strong> A full refund is
              available if you have completed at least 90% of the assigned tasks
              in your coaching program and have not achieved the agreed-upon
              fitness goals, as determined by MahosFitness after a review of
              your progress.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">3. Refund Process</h2>
          <p>To request a refund:</p>
          <ul className="list-disc pl-5">
            <li>
              Contact us at mahosfitness@icloud.com with your request, including
              your name, contract details, and reason for the refund.
            </li>
            <li>
              For non-achievement claims, provide evidence of completed tasks
              (e.g., workout logs, nutrition records).
            </li>
            <li>
              We will review your request within 24 hours and notify you of the outcome.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            4. Non-Refundable Circumstances
          </h2>
          <p>Refunds will not be issued if:</p>
          <ul className="list-disc pl-5">
            <li>Less than 90% of the assigned tasks are completed.</li>
            <li>
              The 24-hour period after contract signing has expired, and no
              valid non-achievement claim is made.
            </li>
            <li>
              You fail to provide requested documentation for the refund review.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">5. Processing Refunds</h2>
          <p>
            Approved refunds will be processed through the original payment
            method within [insert time frame, e.g., 10 business days] of
            approval. Processing times may vary depending on the payment
            provider.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            6. Changes to This Policy
          </h2>
          <p>
            We may update this policy periodically. Changes will be posted on
            our website with an updated effective date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
          <p>For questions or refund requests:</p>
          <p>Email: mahosfitness@icloud.com</p>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Refund;

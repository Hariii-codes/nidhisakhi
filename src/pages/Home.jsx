import { useRef } from 'react';

function Home() {
  const eligibilityRef = useRef(null);

  const scrollToEligibility = () => {
    eligibilityRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Nidhisakhi
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your trusted partner in loan advisory services
        </p>
        <button
          onClick={scrollToEligibility}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started
        </button>
      </div>

      {/* Loan Process Section */}
      <div className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Loan Approval Process
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <img
            src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg"
            alt="Loan Process Flowchart"
            className="w-full max-w-3xl mx-auto"
          />
        </div>
      </div>

      {/* Eligibility Criteria Section */}
      <div ref={eligibilityRef} className="my-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Loan Eligibility Criteria
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Personal Loan</h3>
            <ul className="space-y-2">
              <li>✓ Age: 21-58 years</li>
              <li>✓ Minimum monthly income: ₹25,000</li>
              <li>✓ Employment status: Salaried/Self-employed</li>
              <li>✓ Credit score: 700+</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Business Loan</h3>
            <ul className="space-y-2">
              <li>✓ Business age: 2+ years</li>
              <li>✓ Annual turnover: ₹20 lakhs+</li>
              <li>✓ ITR for last 2 years</li>
              <li>✓ Credit score: 650+</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
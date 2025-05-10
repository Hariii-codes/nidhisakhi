import React from 'react';

function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Our Loan Services
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Personal Loans</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Competitive interest rates</li>
            <li>✓ Flexible repayment terms</li>
            <li>✓ Quick processing</li>
            <li>✓ Minimal documentation</li>
            <li>✓ Loans up to ₹25 lakhs</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Business Loans</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Working capital loans</li>
            <li>✓ Equipment financing</li>
            <li>✓ Business expansion loans</li>
            <li>✓ Collateral-free options</li>
            <li>✓ Customized repayment plans</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Home Loans</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Low interest rates</li>
            <li>✓ Up to 30 years tenure</li>
            <li>✓ Property search assistance</li>
            <li>✓ Balance transfer facility</li>
            <li>✓ Top-up loan facility</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Education Loans</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Cover full course fees</li>
            <li>✓ Study in India or abroad</li>
            <li>✓ Moratorium period</li>
            <li>✓ Tax benefits</li>
            <li>✓ Easy documentation</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Vehicle Loans</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✓ New and used vehicles</li>
            <li>✓ Quick loan approval</li>
            <li>✓ Competitive rates</li>
            <li>✓ Flexible tenure options</li>
            <li>✓ Minimal processing fee</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Loan Advisory</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Financial planning</li>
            <li>✓ Credit score improvement</li>
            <li>✓ Loan comparison</li>
            <li>✓ Documentation support</li>
            <li>✓ Post-disbursement service</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Need Help Choosing?</h2>
        <p className="text-center text-gray-600 mb-6">
          Our loan experts are here to help you find the perfect loan solution for your needs.
        </p>
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact an Advisor
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
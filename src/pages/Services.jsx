import React from 'react';

function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Our Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Personal Loan */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Personal Loan</h2>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li>✓ Flexible loan amounts</li>
            <li>✓ Competitive interest rates</li>
            <li>✓ Quick approval process</li>
            <li>✓ Minimal documentation</li>
          </ul>
          <p className="text-sm text-gray-600">
            Interest rates starting from 10.99% p.a.
          </p>
        </div>

        {/* Business Loan */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Business Loan</h2>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li>✓ High loan amounts</li>
            <li>✓ Flexible repayment terms</li>
            <li>✓ No collateral required</li>
            <li>✓ Business expansion focused</li>
          </ul>
          <p className="text-sm text-gray-600">
            Interest rates starting from 12.99% p.a.
          </p>
        </div>

        {/* Home Loan */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Home Loan</h2>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li>✓ Up to 80% property value</li>
            <li>✓ Long tenure options</li>
            <li>✓ Low interest rates</li>
            <li>✓ Quick property evaluation</li>
          </ul>
          <p className="text-sm text-gray-600">
            Interest rates starting from 8.50% p.a.
          </p>
        </div>

        {/* Education Loan */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Education Loan</h2>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li>✓ Cover full tuition fees</li>
            <li>✓ Study abroad options</li>
            <li>✓ Moratorium period</li>
            <li>✓ Tax benefits available</li>
          </ul>
          <p className="text-sm text-gray-600">
            Interest rates starting from 9.50% p.a.
          </p>
        </div>

        {/* Vehicle Loan */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Vehicle Loan</h2>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li>✓ New & used vehicles</li>
            <li>✓ Quick loan approval</li>
            <li>✓ Flexible tenure</li>
            <li>✓ Competitive rates</li>
          </ul>
          <p className="text-sm text-gray-600">
            Interest rates starting from 9.99% p.a.
          </p>
        </div>

        {/* Loan Against Property */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Loan Against Property</h2>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li>✓ High loan amounts</li>
            <li>✓ Lower interest rates</li>
            <li>✓ Longer repayment period</li>
            <li>✓ Multiple property types</li>
          </ul>
          <p className="text-sm text-gray-600">
            Interest rates starting from 11.50% p.a.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
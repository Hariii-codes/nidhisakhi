import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          About Nidhisakhi
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At Nidhisakhi, we are committed to making the loan process transparent, 
            accessible, and hassle-free for everyone. Our mission is to empower 
            individuals and businesses with the financial guidance they need to 
            achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Expert loan advisory services</li>
              <li>✓ Transparent process</li>
              <li>✓ Competitive interest rates</li>
              <li>✓ Quick loan processing</li>
              <li>✓ Dedicated support team</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Personal Loans</li>
              <li>✓ Business Loans</li>
              <li>✓ Home Loans</li>
              <li>✓ Education Loans</li>
              <li>✓ Loan Refinancing</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <p className="text-gray-700">
            We believe in building long-term relationships with our clients based on 
            trust, transparency, and exceptional service. Our team of experienced 
            financial advisors works tirelessly to understand your unique needs and 
            provide tailored loan solutions that work best for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
import React from 'react';

function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Service 1</h2>
          <p className="text-gray-600">Description of service 1</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Service 2</h2>
          <p className="text-gray-600">Description of service 2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Service 3</h2>
          <p className="text-gray-600">Description of service 3</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
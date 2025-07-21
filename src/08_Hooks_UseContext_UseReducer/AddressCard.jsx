import React from 'react';

export default function AddressCard({city,village,building}) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6">
      <h2 className="text-xl font-semibold mb-2">Head Office</h2>
      <p className="text-gray-700">
        {village}<br />
        {building}, {city} 500008,<br />
        India
      </p>
      <div className="mt-4 flex flex-col text-sm text-gray-600">
        <span>
          <strong>Phone:</strong> +91 98765 43210
        </span>
        <span>
          <strong>Email:</strong> contact@company.com
        </span>
      </div>
    </div>
  );
}

'use client';
import React from 'react';

export default function AboutContent() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-6">
            About Daily Pulse
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Daily Pulse is your trusted source for timely, accurate, and insightful news from around the globe. Our mission is to keep you informed with the latest developments across politics, business, technology, entertainment, sports, and more.
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Founded with the belief that everyone deserves access to quality journalism, we strive to deliver content that is both comprehensive and easy to digest. Our team of dedicated journalists and editors work tirelessly to bring you stories that matter, backed by thorough research and fact-checking.
          </p>
          
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mt-12 mb-4">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-gray-900 mb-2">Accuracy</h4>
              <p className="text-gray-600">We are committed to factual reporting and transparency. If we make a mistake, we'll acknowledge and correct it promptly.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-gray-900 mb-2">Independence</h4>
              <p className="text-gray-600">We maintain editorial independence and report without fear or favor, free from political and commercial influence.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-gray-900 mb-2">Diversity</h4>
              <p className="text-gray-600">We strive to represent diverse perspectives, experiences, and voices in our coverage.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600">We embrace new technologies and formats to deliver news in ways that best serve our audience's needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
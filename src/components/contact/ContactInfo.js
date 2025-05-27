'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactInfo() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
      
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="bg-gray-800 h-12 w-12 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faLocationDot} className="text-white" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">Our Location</h4>
            <p className="mt-1 text-gray-600">123 News Avenue, Mediaville, <br/>NY 10001, United States</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="bg-gray-800 h-12 w-12 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faPhone} className="text-white" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">Phone Number</h4>
            <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
            <p className="mt-1 text-gray-600">Mon-Fri, 9am-6pm EST</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="bg-gray-800 h-12 w-12 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-white" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">Email Address</h4>
            <p className="mt-1 text-gray-600">info@dailypulse.news</p>
            <p className="mt-1 text-gray-600">tips@dailypulse.news (for news tips)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';

export default function FeatureCards() {
  return (
    <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-20 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div className="flex flex-col items-start">
        <div className="rounded-md bg-gray-100 p-2 ring-1 ring-gray-200">
          <FontAwesomeIcon icon={faNewspaper} className="h-6 w-6 text-gray-600" />
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">Breaking News</h3>
        <p className="mt-2 text-base leading-7 text-gray-600">Stay updated with the latest breaking news from around the world.</p>
      </div>
      
      <div className="flex flex-col items-start">
        <div className="rounded-md bg-gray-100 p-2 ring-1 ring-gray-200">
          <FontAwesomeIcon icon={faGlobe} className="h-6 w-6 text-gray-600" />
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">Global Coverage</h3>
        <p className="mt-2 text-base leading-7 text-gray-600">Explore what's trending across politics, entertainment, sports, and more worldwide.</p>
      </div>
      
      <div className="flex flex-col items-start">
        <div className="rounded-md bg-gray-100 p-2 ring-1 ring-gray-200">
          <FontAwesomeIcon icon={faClock} className="h-6 w-6 text-gray-600" />
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">Real-time Updates</h3>
        <p className="mt-2 text-base leading-7 text-gray-600">Access carefully curated news articles from trusted sources worldwide in real-time.</p>
      </div>
    </div>
  );
}
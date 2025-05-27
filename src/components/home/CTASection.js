'use client';
import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function CTASection() {
  return (
    <div className="mt-20 rounded-2xl bg-gray-50 p-10 ring-1 ring-inset ring-gray-900/10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Stay ahead with the latest news</h2>
        <p className="mt-4 text-lg text-gray-600">
          Daily Pulse delivers reliable, accurate, and timely news that keeps you informed about what matters most.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/news">
            <button className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-md shadow-md transition duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center">
              Browse News <FontAwesomeIcon icon={faSearch} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
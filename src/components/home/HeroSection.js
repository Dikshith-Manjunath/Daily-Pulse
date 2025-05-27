'use client';
import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection() {
  return (
    <div className="bg-white py-20 flex-grow">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-pretty text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Daily Pulse
          </h1>
          <p className="mt-4 text-xl text-gray-600 leading-8 max-w-lg">
            Stay informed with DailyPulse, your go-to platform for
            up-to-the-minute news coverage, insightful articles, and
            in-depth analysis across politics, entertainment, sports, and
            more.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/news">
              <button className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center">
                View Latest News <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faNewspaper, faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FontAwesomeIcon icon={faTimes} className="block h-6 w-6" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="block h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-white font-bold text-xl">
                Daily Pulse
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                </Link>
                <Link
                  href="/news"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faNewspaper} className="mr-2" /> News
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className="text-white hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </Link>
          <Link
            href="/news"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faNewspaper} className="mr-2" /> News
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
'use client';
import React from 'react';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 space-x-6">
            <Link href="/about" className="text-gray-400 hover:text-white">About</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            <Link href="/news" className="text-gray-400 hover:text-white">News</Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Daily Pulse. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
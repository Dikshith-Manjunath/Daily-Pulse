'use client';
import React, { Component } from 'react';
import Image from 'next/image';

export default class NewsItem extends Component {  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow">
        <div className="relative">
          <a href={newsUrl} target="_blank" rel="noreferrer">
            {imageUrl ? (
              <div className="h-48 w-full overflow-hidden">
                <img 
                  className="rounded-t-lg w-full h-full object-cover"
                  src={imageUrl} 
                  alt="" 
                />
              </div>
            ) : (
              <div className="h-48 w-full bg-gray-200 flex items-center justify-center rounded-t-lg">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
          </a>
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded">{source}</span>
        </div>
        <div className="p-5">
          <a href={newsUrl} target="_blank" rel="noreferrer">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              {title ? title.slice(0, 80) : ""}
              {title && title.length > 80 ? "..." : ""}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-600">
            {description ? description.slice(0, 150) : ""}
            {description && description.length > 150 ? "..." : ""}
          </p>
          <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
            <span>By {author ? author : "Unknown"}</span>
            <span>{date ? new Date(date).toLocaleDateString() : ""}</span>
          </div>          <a
            href={newsUrl}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50"
            rel="noreferrer"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }
}

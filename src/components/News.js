'use client';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import NewsItem from './NewsItem';
import Link from 'next/link';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [], // Initialize as an empty array to prevent map errors
      prevPage: null,
      loading: false,
      page: null,
    };
  }
  
  async componentDidMount() {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      loading: false, 
      page: parsedData.nextPage, 
      prevPage: parsedData.prevPage || null,
      articles: parsedData.results || [],
      totalResults: parsedData.totalResults
    });
  }
  
  handlePrevClick = async () => {
    console.log('Previous Page');
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    // We need to pass the previous page value
    const prevPage = this.state.prevPage;
    let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en&page=${prevPage}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      loading: false, 
      articles: parsedData.results || [],
      // Store current page as previous for going back
      prevPage: parsedData.prevPage || null,
      // Update next page from API response
      page: parsedData.nextPage || null
    });
  }

  handleNextClick = async () => {
    console.log('Next Page');
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    // Use the nextPage value from state (which comes from the API response)
    const nextPage = this.state.page;
    let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en&page=${nextPage}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      loading: false, 
      articles: parsedData.results || [],
      // Store current page as previous for going back
      prevPage: parsedData.prevPage || null,
      // Update next page from API response
      page: parsedData.nextPage || null
    });
  }

  render() {
    return (
      <>
        <div className="container mx-auto bg-white min-h-screen">
          <div className="flex justify-between items-center p-4 bg-gray-800">
            <h1 className="text-2xl text-white font-bold">Daily Pulse</h1>
            <Link href="/">
              <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Back to Home
              </button>
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold text-center my-5 text-gray-800">Latest News</h1>
          {this.state.loading && (
            <div className="flex justify-center items-center h-64">
              <FontAwesomeIcon icon={faSpinner} spin className="text-blue-600 text-4xl" />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            {this.state.articles && this.state.articles.map((element) => {
              return (
                <div className="my-2" key={element.link || element.article_id || Math.random().toString()}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.image_url}
                    newsUrl={element.link}
                    author={element.creator}
                    date={element.pubDate}
                    source={element.source_id}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between px-8 mx-2">
             <button type="button" disabled={!this.state.prevPage} onClick={this.handlePrevClick} className="bg-gray-800 mx-3 text-white font-semibold py-2 px-8 my-10 rounded-md shadow-md transition duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"> 
              <FontAwesomeIcon icon={faArrowLeft} />  Previous
            </button>
            <button type="button" disabled={!this.state.page} onClick={this.handleNextClick} className="bg-gray-800 text-white font-semibold py-2 px-4 my-10 rounded-md shadow-md transition duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
              Next  <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </>
    );
  }
}
'use client';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import NewsItem from '../NewsItem';
import Link from 'next/link';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [], // Initialize as an empty array to prevent map errors
      prevPage: null,
      loading: false,
      page: null,
      language: 'en', // Default language is English
      languages: [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
        { code: 'it', name: 'Italian' },
        { code: 'ru', name: 'Russian' },
        { code: 'zh', name: 'Chinese' },
        { code: 'ar', name: 'Arabic' },
        { code: 'hi', name: 'Hindi' }
      ],
      showLanguageDropdown: false,
    };
    this.dropdownRef = React.createRef();
  }
  
  componentDidMount() {
    // Get language from URL if available
    const searchParams = new URLSearchParams(window.location.search);
    const langParam = searchParams.get('lang');
    
    // Check if the language is valid and update state
    const validLanguage = langParam && this.state.languages.some(lang => lang.code === langParam)
      ? langParam
      : this.state.language;
      
    this.fetchNews(validLanguage);
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.dropdownRef && this.dropdownRef.current && !this.dropdownRef.current.contains(event.target)) {
      this.setState({ showLanguageDropdown: false });
    }
  }
  
  async fetchNews(language) {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=${language}`;
    this.setState({ loading: true, language });

    try {
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      let parsedData = await data.json();
      this.setState({ 
        loading: false, 
        page: parsedData.nextPage, 
        prevPage: parsedData.prevPage || null,
        articles: parsedData.results || [],
        totalResults: parsedData.totalResults
      });

      // Update URL with the selected language
      const url = new URL(window.location);
      url.searchParams.set('lang', language);
      window.history.pushState({}, '', url);
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
      alert("Failed to fetch news. Please try again later.");
    }
  }
  
  handlePrevClick = async () => {
    console.log('Previous Page');
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    // We need to pass the previous page value
    const prevPage = this.state.prevPage;
    let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=${this.state.language}&page=${prevPage}`;
    this.setState({ loading: true });
    
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
        loading: false, 
        articles: parsedData.results || [],
        prevPage: parsedData.prevPage || null,
        page: parsedData.nextPage || null
      });
    } catch (error) {
      console.error("Error fetching previous page:", error);
      this.setState({ loading: false });
    }
  }

  handleNextClick = async () => {
    console.log('Next Page');
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    // Use the nextPage value from state (which comes from the API response)
    const nextPage = this.state.page;
    let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=${this.state.language}&page=${nextPage}`;
    this.setState({ loading: true });
    
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
        loading: false, 
        articles: parsedData.results || [],
        prevPage: parsedData.prevPage || null,
        page: parsedData.nextPage || null
      });
    } catch (error) {
      console.error("Error fetching next page:", error);
      this.setState({ loading: false });
    }
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
          
          <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-2">
            <h1 className="text-3xl font-bold text-gray-800 mb-3 sm:mb-0">Latest News</h1>
            <div className="relative group" ref={this.dropdownRef}>
              <button 
                className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 shadow-sm hover:bg-gray-50 transition-colors duration-200"
                onClick={() => this.setState(prev => ({ showLanguageDropdown: !prev.showLanguageDropdown }))}
                type="button"
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  {this.state.language === 'en' && '🇺🇸'}
                  {this.state.language === 'es' && '🇪🇸'}
                  {this.state.language === 'fr' && '🇫🇷'}
                  {this.state.language === 'de' && '🇩🇪'}
                  {this.state.language === 'it' && '🇮🇹'}
                  {this.state.language === 'ru' && '🇷🇺'}
                  {this.state.language === 'zh' && '🇨🇳'}
                  {this.state.language === 'ar' && '🇸🇦'}
                  {this.state.language === 'hi' && '🇮🇳'}
                </span>
                <span className="font-medium text-gray-700">
                  {this.state.languages.find(lang => lang.code === this.state.language)?.name || 'English'}
                </span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {this.state.showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <ul className="py-1">
                    {this.state.languages.map(lang => (
                      <li key={lang.code}>
                        <button
                          onClick={() => {
                            this.fetchNews(lang.code);
                            this.setState({ showLanguageDropdown: false });
                          }}
                          className={`flex items-center space-x-3 w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-150 ${this.state.language === lang.code ? 'bg-gray-50 font-medium' : ''}`}
                        >
                          <span className="w-6 h-6 flex items-center justify-center">
                            {lang.code === 'en' && '🇺🇸'}
                            {lang.code === 'es' && '🇪🇸'}
                            {lang.code === 'fr' && '🇫🇷'}
                            {lang.code === 'de' && '🇩🇪'}
                            {lang.code === 'it' && '🇮🇹'}
                            {lang.code === 'ru' && '🇷🇺'}
                            {lang.code === 'zh' && '🇨🇳'}
                            {lang.code === 'ar' && '🇸🇦'}
                            {lang.code === 'hi' && '🇮🇳'}
                          </span>
                          <span className="text-gray-700">{lang.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
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
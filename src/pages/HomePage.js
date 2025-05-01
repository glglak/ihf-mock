import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import NewsSection from '../components/NewsSection';
import UpcomingEvents from '../components/UpcomingEvents';
import InfoBanner from '../components/InfoBanner';
import MediaCentre from '../components/MediaCentre';
import Competitions from '../components/Competitions';
import WorldMapSection from '../components/WorldMapSection';
import Partners from '../components/Partners';
import Newsletter from '../components/Newsletter';
import CookieConsent from '../components/CookieConsent';
import ApiService from '../services/api.service';

const HomePage = () => {
  const [sliderData, setSliderData] = useState([]);
  const [bannerUrls, setBannerUrls] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load slider data and banner URLs
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [sliderResponse, bannerResponse] = await Promise.all([
          ApiService.getSliderData(),
          ApiService.getBannerUrls()
        ]);
        
        setSliderData(sliderResponse);
        setBannerUrls(bannerResponse);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load content. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show loading state
  if (isLoading) {
    return (
      <div className="loading-container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="error-container text-center py-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div>
      {sliderData.length > 0 && <Slider slides={sliderData} />}
      <NewsSection />
      <UpcomingEvents />
      <InfoBanner 
        imageUrl={bannerUrls.antiDoping || "https://www.ihf.info/sites/default/files/styles/news_details/public/2021-07/Competition%20manipulation_1440x600.jpg?itok=qvCV97Bp"} 
        link="/athlete-365-anti-doping"
      />
      <MediaCentre />
      <Competitions />
      <WorldMapSection />
      <Partners />
      <Newsletter />
      <CookieConsent />
    </div>
  );
};

export default HomePage;

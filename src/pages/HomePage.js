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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Anti-doping banner image URL
  const antiDopingBannerUrl = "https://www.ihf.info/sites/default/files/styles/large/public/2022-12/athlete365_banner.jpg";

  useEffect(() => {
    // Load slider data
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await ApiService.getSliderData();
        setSliderData(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching slider data:', err);
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
      <UpcomingEvents />
      <InfoBanner 
        imageUrl={antiDopingBannerUrl} 
        link="/athlete-365-anti-doping"
      />
      <MediaCentre />
      <Competitions />
      <WorldMapSection />
      <Partners />
      <NewsSection />
      <Newsletter />
      <CookieConsent />
    </div>
  );
};

export default HomePage;

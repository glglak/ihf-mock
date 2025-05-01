import React from 'react';
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

const HomePage = () => {
  // Dummy slider data
  const sliderData = [
    {
      id: 1,
      title: "THE RECIPE FOR A HISTORIC FEATURE: MITTÚN'S EXPERIENCE AS THE FAROE ISLANDS QUALIFY FOR THE FIRST SENIOR WORLD CHAMPIONSHIP",
      description: "During the IHF Youth Coaches Handball Education Week which took place as part of the 2023 IHF Education Weeks, coach Mark Lausen-Marcher presented a lecture about how the Faroe Islands are slowly emerging as a country to watch.",
      image: "https://www.ihf.info/sites/default/files/styles/news_details/public/2025-04/Mittun1440.png?itok=jiEfG33t"
    },
    {
      id: 2,
      title: "WOMEN'S WORLD CHAMPIONSHIP 2023 DRAW RESULTS",
      description: "The IHF Women's World Championship 2023 draw has taken place in Copenhagen, Denmark. 32 teams will compete from November 29 to December 17 across Denmark, Norway, and Sweden.",
      image: "https://www.ihf.info/sites/default/files/styles/news_details/public/2025-04/Simon1440.jpg?itok=uQc4UjCB"
    },
    {
      id: 3,
      title: "EGYPT CROWNED CHAMPIONS AT THE 2023 MEN'S U21 WORLD CHAMPIONSHIP",
      description: "Egypt secured their first-ever IHF Men's U21 World Championship title after defeating Germany in a thrilling final match, marking a historic achievement for African handball.",
      image: "https://www.ihf.info/sites/default/files/styles/large_desktop_header_image/public/2023-07/egypt%20u21%20champions%20banner.jpg"
    }
  ];

  // Anti-doping banner image URL
  const antiDopingBannerUrl = "https://www.ihf.info/sites/default/files/styles/large/public/2022-12/athlete365_banner.jpg";

  return (
    <div>
      <Slider slides={sliderData} />
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

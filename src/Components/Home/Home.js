import React from 'react';
import Banner from './Banner/Banner';
import BannerBottom from './BannerBottom/BannerBottom';

export default function Home() {
  return <div className='home'>
      <Banner />
      <BannerBottom />
  </div>;
}

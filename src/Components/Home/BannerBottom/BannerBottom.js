import React from 'react';
import FeatureCard from './FeatureCard/FeatureCard';

export default function BannerBottom() {
    return <>
    <h3 className='home_heading'>Why BuCoo ?</h3>
        <div className='banner_bottom'>
            <FeatureCard icon="fa-truck" type="Quick Delivery" />
            <FeatureCard icon="fa-shield-check" type="Secure Payment" />
            <FeatureCard icon="fa-thumbs-up" type="Best Quality" />
            <FeatureCard icon="fa-star" type="Return Guarantee" />
        </div>
    </>;
}

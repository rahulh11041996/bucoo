import React from 'react';
import { DICTIONARY, ICONS } from '../../../Shared/Data/data';
import FeatureCard from './FeatureCard/FeatureCard';

export default function BannerBottom() {
    return <>
    <h3 className='home_heading'>{DICTIONARY.WHY}</h3>
        <div className='banner_bottom'>
            <FeatureCard icon={ICONS.TRUCK} type={DICTIONARY.QUICK_DELIVERY} />
            <FeatureCard icon={ICONS.SHIELD_CHECK} type={DICTIONARY.SECURE_PAYMENT} />
            <FeatureCard icon={ICONS.THUMBS_UP} type={DICTIONARY.BEST_QUALITY} />
            <FeatureCard icon={ICONS.STAR} type={DICTIONARY.RETURN} />
        </div>
    </>;
}

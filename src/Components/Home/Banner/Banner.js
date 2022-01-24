import React from 'react';
import bannerImage from '../../../Assets/Images/bannerimage.png'
import { DICTIONARY } from '../../../Shared/Data/data';
import Search from '../../Forms/Search/Search';


export default function Banner() {
    return <div className='banner_wrapper'>
        <div className="banner_left">
            <div className="search_wrapper"><Search /></div>
            <h4>{DICTIONARY.BACK_TO_SCHOOL}</h4>
            <h1>{DICTIONARY.OFFER}</h1>
            <h3>{DICTIONARY.COMMUNITY}</h3>
            <p>{DICTIONARY.LOREM}</p>
            <button>{DICTIONARY.GET_DEALS}<i style={{ fontSize: '1.2rem', paddingLeft: '0.6rem' }} className="fal fa-long-arrow-right"></i></button>
        </div>
        <div className="banner_right">
            <img src={bannerImage} alt="Banner" />
        </div>
    </div>;
}

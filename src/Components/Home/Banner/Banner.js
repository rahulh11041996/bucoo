import React from 'react';
import bannerImage from '../../../Assets/Images/bannerimage.png'

export default function Banner() {
    return <div className='banner_wrapper'>
        <div className="banner_left">
            <h4>BACK TO SCHOOL</h4>
            <h1>Special 50% Off</h1>
            <h3>for our student community</h3>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos impedit nam ut ipsa accusamus placeat illum iusto molestias tenetur officia, nesciunt voluptates consequuntur perferendis facere rem! Nam sit obcaecati doloremque?
            </p>
            <button>Get The Deal <i style={{ fontSize: '1.2rem', paddingLeft: '0.6rem' }} className="fal fa-long-arrow-right"></i></button>
        </div>
        <div className="banner_right">
            <img src={bannerImage} alt="Banner" />
        </div>
    </div>;
}

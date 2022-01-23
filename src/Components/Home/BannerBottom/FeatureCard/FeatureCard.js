import React from 'react';

export default function FeatureCard(props) {
  return <div className='feature_card'>
      <div className="feature_icon">
          <i className={`fas ${props.icon}`}></i>
      </div>
      <div className="feature_description">
          <h3>{props.type}</h3>
          <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium perspiciatis sint ab beatae, repellendus officiis laborum, ad quo maxime modi, voluptate ut aspernatur nobis. Non corporis magnam omnis aspernatur modi.
          </p>
      </div>
  </div>;
}

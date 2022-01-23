import React from 'react';
import { DICTIONARY } from '../../../../Shared/Data/data';

export default function FeatureCard(props) {
  return <div className='feature_card'>
      <div className="feature_icon">
          <i className={`fas ${props.icon}`}></i>
      </div>
      <div className="feature_description">
          <h3>{props.type}</h3>
          <p>{DICTIONARY.LOREM}</p>
      </div>
  </div>;
}

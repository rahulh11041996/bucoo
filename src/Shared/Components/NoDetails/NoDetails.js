import React from 'react';
import { DICTIONARY, ICONS } from '../../Data/data';

export default function NoDetails() {
    return <div className='no_details'>
        <i className={ICONS.SAD}></i>
        <h1>{DICTIONARY.NO_BOOK_DETAILS}</h1>
    </div>
}

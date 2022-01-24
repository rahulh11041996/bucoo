import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE64, DICTIONARY, ICONS } from '../../Data/data';

export default function EmptyState() {

    const navigate = useNavigate();

    return <div className='no_data'>
        <img alt='' src={BASE64}></img>
        <h1>{DICTIONARY.NO_BOOK_IN_SHELF} <b>"{DICTIONARY.ADD_BOOK_TITLE}"</b> {DICTIONARY.BUTTON}</h1>
        <button onClick={() => navigate("../addbook")}><i style={{ fontSize: '1.2rem', paddingRight: '0.4rem' }} className={ICONS.PLUS}></i> {DICTIONARY.ADD_BOOK_TITLE}</button>
    </div>;
}

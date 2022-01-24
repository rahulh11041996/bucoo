import React from 'react';
import bookShelf from '../../../Assets/Images/book-shelf.png'
import { DICTIONARY } from '../../Data/data';

export default function BookAddedModal() {
    return <>
        <img alt='Delete Confirmation' className='delete_confirmation_image' src={bookShelf} />
        <p className='delete_confirmation'>{DICTIONARY.SUCCESSFULLY_ADDED} <b>"{DICTIONARY.VIEW_ADDED_BOOK}"</b> {DICTIONARY.BUTTON}</p>
    </>;
}

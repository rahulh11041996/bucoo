import React from 'react';
import { DICTIONARY } from '../../Data/data';
import deleteImage from '../../../Assets/Images/delete-forever.png'

export default function DeleteModal(props) {
  return <>
    <img alt='Delete Confirmation' className='delete_confirmation_image' src={deleteImage} />
      <p className='delete_confirmation'>{DICTIONARY.DELETE_CONFRIMATION} <b>'{props.deletedItem}'</b>{DICTIONARY.DELETE_CONFRIMATION_SECOND}</p>
  </>;
}

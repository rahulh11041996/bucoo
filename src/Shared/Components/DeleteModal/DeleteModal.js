import React from 'react';

export default function DeleteModal(props) {
  return <>
      <img alt='Delete Confirmation' className='delete_confirmation_image' src="https://img.icons8.com/cute-clipart/100/000000/delete-forever.png" />
      <p className='delete_confirmation'>Are you sure want to delete <b>'{props.deletedItem}'</b>? You can't undo this action</p>
  </>;
}

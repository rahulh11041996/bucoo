import React from 'react';
import reactDom from 'react-dom';

export default function SnackBar(props) {

  React.useEffect(() => {
      const snackBarTimerRef = setTimeout(() => { props.clearSnackBar() }, 3000);
      return () => {
          snackBarTimerRef && clearTimeout(snackBarTimerRef);
      };
  }, []);

  return reactDom.createPortal(
      <div className='snackbar'>
          <p><b>"{props.snackBarContent.bookName}"</b> {props.snackBarContent.snackbarContent}</p>
      </div>,
      document.getElementById('portal')
  );
}

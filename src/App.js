import './App.css';
import StoreContext from './Store/StoreContext';
import React from 'react';
import { Router } from './Components/Router/Router';
import SnackBar from './Shared/Components/SnackBar/SnackBar';
import { DEFAULT_BOOKDATA_STATE, DEFAULT_SNACKBAR_STATE, UPDATED_BOOK_SNACKBAR_MESSAGE } from './Shared/Data/data';


function App() {

  const [booksData, setBooksData] = React.useState(DEFAULT_BOOKDATA_STATE);

  const [showSnackbar, setShowSnackbar] = React.useState(DEFAULT_SNACKBAR_STATE);


  const onAddBook = (bookData) => {
    setBooksData((prevdata) => ([...prevdata, bookData]))
  }


  const onGetBook = (bookId) => {
    return booksData.filter((book) => book.bookId === bookId)
  }

  const onDeleteBook = (bookId) => {
    const newBookList = booksData.filter((book) => book.bookId !== bookId);
    setBooksData(newBookList);
  }

  const onEditdetails = (bookId, bookDetail) => {
    showSnackbar.isShow && setShowSnackbar(DEFAULT_SNACKBAR_STATE);
    let bookRef = booksData;
    const index = bookRef.findIndex((book) => book.bookId === bookId);
    bookRef[index] = bookDetail;
    setBooksData(bookRef);
    setShowSnackbar({ isShow: true, snackbarContent: UPDATED_BOOK_SNACKBAR_MESSAGE, bookName: bookDetail.bookName});
  }

  return (
    <StoreContext.Provider value={{
      bookStore: booksData,
      addBooks: onAddBook,
      getBookForId: onGetBook,
      deleteBook : onDeleteBook,
      editBookDetails : onEditdetails
    }}>
      <Router />
      {showSnackbar.isShow && <SnackBar snackBarContent={showSnackbar} clearSnackBar={() => setShowSnackbar(DEFAULT_SNACKBAR_STATE)} /> }
    </StoreContext.Provider>
  );
}

export default App;

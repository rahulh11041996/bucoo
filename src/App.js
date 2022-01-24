import './App.css';
import StoreContext from './Store/StoreContext';
import React from 'react';
import { Router } from './Components/Router/Router';
import SnackBar from './Shared/Components/SnackBar/SnackBar';
import { ACTIONS, DEFAULT_BOOKDATA_STATE, DEFAULT_SNACKBAR_STATE, UPDATED_BOOK_SNACKBAR_MESSAGE } from './Shared/Data/data';

/**
 * Reducer to manage state
 */
function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.CREATE_NEW_BOOK:
      return [...state, action.payload.updatedBook];
    case ACTIONS.EDIT_BOOK:
      {
        let bookRef = state;
        const index = bookRef.findIndex((book) => book.bookId === action.payload.bookId);
        bookRef[index] = action.payload.bookDetail;
        return bookRef;
      }
    case ACTIONS.DELETE_BOOK:
      {
        const newBookList = state.filter((book) => book.bookId !== action.payload.bookId);
        return newBookList;
      }
    default:
      return state;
  }
}

function App() {

  const [showSnackbar, setShowSnackbar] = React.useState(DEFAULT_SNACKBAR_STATE);

  const [booksData, dispatch ] = React.useReducer(reducer, DEFAULT_BOOKDATA_STATE);

  /**
   * get the books data for selected id
   * @param {book id} bookId 
   * @returns 
   */
  const onGetBook = (bookId) => {
    return booksData.filter((book) => book.bookId === bookId)
  }

  /**
   * Dispatcher to handle stet using reucer
   * @param {reducer actions} type 
   * @param {payload to manage state *} payload 
   */
  const dispatchAction = (type, payload) => {
      dispatch({type, payload});
      type === ACTIONS.EDIT_BOOK && setShowSnackbar({ isShow: true, snackbarContent: UPDATED_BOOK_SNACKBAR_MESSAGE, bookName: payload.bookDetail.bookName });
  }

  return (
    <StoreContext.Provider value={{
      bookStore: booksData,
      dispatchRef: dispatchAction, 
      getBookForId: onGetBook
    }}>
      <Router />
      {showSnackbar.isShow && <SnackBar snackBarContent={showSnackbar} clearSnackBar={() => setShowSnackbar(DEFAULT_SNACKBAR_STATE)} /> }
    </StoreContext.Provider>
  );
}

export default App;

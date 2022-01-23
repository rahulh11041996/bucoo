import './App.css';
import StoreContext from './Store/StoreContext';
import React from 'react';
import { Router } from './Components/Router/Router';
import SnackBar from './Shared/Components/SnackBar/SnackBar';

const defaultBookData = [
  {
    bookId: 'red_white002',
    bookName: 'Red, White & Royal Blue',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic',
    pages: '432',
    language: 'English',
    weight: '12.8 ounces',
    publisher: 'Griffin, 2019',
    price: '300',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71skR7IaVEL.jpg',
    authorName: 'Casey McQuiston',
    country: 'New York',
    aboutAuthor: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    authorImage: 'https://images.gr-assets.com/authors/1608160367p5/17949486.jpg'
  }
]

const _defualtSnackbarState = {
  isShow: false,
  snackbarContent: '',
  bookName: ''
}

const _updatedBookDetailsSnackbarContent =  'details is updated sucessfully';

function App() {

  const [booksData, setBooksData] = React.useState(defaultBookData);

  const [showSnackbar, setShowSnackbar] = React.useState(_defualtSnackbarState);


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
    showSnackbar.isShow && setShowSnackbar(_defualtSnackbarState);
    let bookRef = booksData;
    const index = bookRef.findIndex((book) => book.bookId === bookId);
    bookRef[index] = bookDetail;
    setBooksData(bookRef);
    setShowSnackbar({ isShow: true, snackbarContent: _updatedBookDetailsSnackbarContent, bookName: bookDetail.bookName});
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
      {showSnackbar.isShow && <SnackBar snackBarContent={showSnackbar} clearSnackBar={() => setShowSnackbar(_defualtSnackbarState)} /> }
    </StoreContext.Provider>
  );
}

export default App;

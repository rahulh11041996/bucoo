import React, { useEffect } from 'react';
import StoreContext from '../../Store/StoreContext';
import { Text } from '../Forms/Text/Text';
import { TextArea } from '../Forms/TextArea/TextArea';
import { nanoid } from 'nanoid'
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '../../Shared/Components/Modal/Modal';
import BookAddedModal from '../../Shared/Components/BookAddedModal/BookAddedModal';
import SnackBar from '../../Shared/Components/SnackBar/SnackBar';


const _defaultState = {
    bookName: '',
    description: '',
    pages: '',
    language: '',
    weight: '',
    publisher: '',
    price: '',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71skR7IaVEL.jpg',
    authorName: '',
    country: '',
    aboutAuthor: '',
    authorImage: 'https://images.gr-assets.com/authors/1608160367p5/17949486.jpg'
}

const _defaultErrorState = {
    bookName: '',
    description: '',
    pages: '',
    language: '',
    weight: '',
    publisher: '',
    price: '',
    image: '',
    authorName: '',
    country: '',
    aboutAuthor: '',
    authorImage: ''
}

export const AddBook = () => {

    const bookContext = React.useContext(StoreContext)

    const [bookDetail, setBookDetail] = React.useState(_defaultState);

    const [errors, setErrors] = React.useState(_defaultErrorState);

    const [iseditMode, setIsEditMode] = React.useState(false);

    const [showModal, setShowModal] = React.useState(false);

    const [addedBookId, setAddedBookId] = React.useState('');

    let { bookId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (bookId) {
            const updatedDetails = bookContext.getBookForId(bookId);
            setBookDetail(updatedDetails[0]);
            setIsEditMode(true)
        }
    }, [bookId]);


    const onValueChange = (value, name) => {
        setBookDetail((prevBookDetails) => ({ ...prevBookDetails, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: value.trim() ? '' : 'is a required field' }))
    }


    const addToList = () => {

        Object.keys(bookDetail).forEach((key) => {
            const isEmpty = bookDetail[key] === null || bookDetail[key] === '';
            isEmpty && setErrors((prevErrors) => ({ ...prevErrors, [key]: "is a required field" }))
        })

        const hasError = Object.values(bookDetail).some((value) => (!!value === false))
 
        if (hasError) return;
        iseditMode ? editBookDetails() : createNewBook();
    }

    const editBookDetails = () => {
        bookContext.editBookDetails(bookId, bookDetail);
        navigate(`/booklist/${bookId}`);
    }

    const createNewBook = () => {
        const bookId = nanoid();
        setAddedBookId(bookId);
        const updatedBook = { ...bookDetail, bookId }
        bookContext.addBooks(updatedBook);
        setBookDetail(_defaultState);
        setShowModal(true);
    }

    const onSecondaryButtonClicked = () => { 
        setShowModal(false);
        setAddedBookId('');
     } 
    
    const onPrimaryButtonClicked = () => { 
        setShowModal(false);
        navigate(`/booklist/${addedBookId}`);
     } 

    return <div className='add_book_layout'>
        <h2>{iseditMode ? 'Edit Book Details' : 'Add New Book'}</h2>
        <div className="input_grid_layout">
            <Text onFieldBlur={onValueChange} col={4} placeholder="Book Name" value={bookDetail.bookName} name='bookName' error={errors.bookName} />
            <Text onFieldBlur={onValueChange} col={4} placeholder="Price" value={bookDetail.price} name='price' error={errors.price} />
            <Text onFieldBlur={onValueChange} col={4} placeholder="Author Name" value={bookDetail.authorName} name='authorName' error={errors.authorName} />
            <TextArea onFieldBlur={onValueChange} col={6} placeholder="Description" value={bookDetail.description} name='description' error={errors.description} />
            <TextArea onFieldBlur={onValueChange} col={6} placeholder="About Author" value={bookDetail.aboutAuthor} name='aboutAuthor' error={errors.aboutAuthor} />
            <Text onFieldBlur={onValueChange} col={4} placeholder="Author Image Url" value={bookDetail.authorImage} name='authorImage' error={errors.authorImage} />
            <Text onFieldBlur={onValueChange} col={4} placeholder="Author Nationality" value={bookDetail.country} name='country' error={errors.country} />
            <Text onFieldBlur={onValueChange} col={4} placeholder="Language" value={bookDetail.language} name='language' error={errors.language} />
            <Text onFieldBlur={onValueChange} col={2} placeholder="Pages" value={bookDetail.pages} name='pages' error={errors.pages} />
            <Text onFieldBlur={onValueChange} col={2} placeholder="Book Weight" value={bookDetail.weight} name='weight' error={errors.weight} />
            <Text onFieldBlur={onValueChange} col={4} placeholder="Publisher" value={bookDetail.publisher} name='publisher' error={errors.publisher} />
            <Text onFieldBlur={onValueChange} col={4} placeholder="Book Image Url" value={bookDetail.image} name='image' error={errors.image} />
        </div>
        <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '2.4rem' }}>
            {iseditMode && <button onClick={() => navigate(`/booklist/${bookId}`)} className='secondary_button'>Cancel</button> }
            <button onClick={addToList} >{iseditMode ? 'Update Record' : 'Add To Book List'}</button>
        </div>

        <Modal modalTitle="New Book Added" isShow={showModal} onSecondaryButtonClicked={onSecondaryButtonClicked} onPrimaryButtonClicked={onPrimaryButtonClicked} primaryButtonIcon="fas fa-book-alt" primaryButtonText="View Added Book" onClose={() => setShowModal(false)}>
            <BookAddedModal />
        </Modal>
    </div>;
};

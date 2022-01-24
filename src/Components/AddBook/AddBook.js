import React, { useEffect } from 'react';
import StoreContext from '../../Store/StoreContext';
import { Text } from '../Forms/Text/Text';
import { TextArea } from '../Forms/TextArea/TextArea';
import { nanoid } from 'nanoid'
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '../../Shared/Components/Modal/Modal';
import BookAddedModal from '../../Shared/Components/BookAddedModal/BookAddedModal';
import { ACTIONS, DEFAULT_ADD_BOOK_ERROR_STATE, DEFAULT_ADD_BOOK_FORM_STATE, DICTIONARY, ICONS, PREFILL_FORM_DATA } from '../../Shared/Data/data';


export const AddBook = () => {

    const bookContext = React.useContext(StoreContext)

    const [bookDetail, setBookDetail] = React.useState(DEFAULT_ADD_BOOK_FORM_STATE);

    const [errors, setErrors] = React.useState(DEFAULT_ADD_BOOK_ERROR_STATE);

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


    /**
     * update the form state and error staet of the form
     * @param {input onchange value} value 
     * @param {*input field anem } name 
     */
    const onValueChange = (value, name) => {
        setBookDetail((prevBookDetails) => ({ ...prevBookDetails, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: value.trim() ? '' : 'is a required field' }))
    }


    /**
     * Adding / updating state for book
     * @returns 
     */
    const addToList = () => {

        Object.keys(bookDetail).forEach((key) => {
            const isEmpty = bookDetail[key] === null || bookDetail[key] === '';
            isEmpty && setErrors((prevErrors) => ({ ...prevErrors, [key]: "is a required field" }))
        })

        const hasError = Object.values(bookDetail).some((value) => (!!value === false))

        if (hasError) return;
        iseditMode ? editBookDetails() : createNewBook();
    }

    /**
     * Editing the book data for selected id and updated in global state
     */
    const editBookDetails = () => {
        bookContext.dispatchRef(ACTIONS.EDIT_BOOK, { bookId, bookDetail });
        navigate(`/booklist/${bookId}`);
    }

    /**
     * Creating new book record in global state
     */
    const createNewBook = () => {
        const bookId = nanoid();
        setAddedBookId(bookId);
        const updatedBook = { ...bookDetail, bookId }
        bookContext.dispatchRef(ACTIONS.CREATE_NEW_BOOK, { updatedBook });
        setBookDetail(DEFAULT_ADD_BOOK_FORM_STATE);
        setShowModal(true);
    }

    /**
     * Modal secondary button event hanler
     * close modal and clear edit state
     */
    const onSecondaryButtonClicked = () => {
        setShowModal(false);
        setAddedBookId('');
    }

    /**
     * Modal primary button event handler
     * Roue to details of newly created book
     */
    const onPrimaryButtonClicked = () => {
        setShowModal(false);
        navigate(`/booklist/${addedBookId}`);
    }

    /**
     * To prefill state
     */
    const onEnterKeyPressed = () => {
        if(PREFILL_FORM_DATA[bookDetail.bookName]) {
            setBookDetail(PREFILL_FORM_DATA[bookDetail.bookName]);
            setErrors(DEFAULT_ADD_BOOK_ERROR_STATE);
        } 
    }

    return <div className='add_book_layout'>
        <h2>{iseditMode ? DICTIONARY.EDIT_BOOK_TITLE : DICTIONARY.ADD_BOOK_TITLE}</h2>
        <div className="input_grid_layout">
            <Text onFieldBlur={onValueChange} onEnterKeyPressed={onEnterKeyPressed} col={4} placeholder={DICTIONARY.FORM.BOOK_NAME} value={bookDetail.bookName} name='bookName' error={errors.bookName} />
            <Text onFieldBlur={onValueChange} col={4} placeholder={DICTIONARY.FORM.PRICE} value={bookDetail.price} name='price' error={errors.price} />
            <Text onFieldBlur={onValueChange} col={4} placeholder={DICTIONARY.FORM.AUTHOR_NAME} value={bookDetail.authorName} name='authorName' error={errors.authorName} />
            <TextArea onFieldBlur={onValueChange} col={6} placeholder={DICTIONARY.FORM.DESCRIPTION} value={bookDetail.description} name='description' error={errors.description} />
            <TextArea onFieldBlur={onValueChange} col={6} placeholder={DICTIONARY.FORM.ABOUT_AUTHOR} value={bookDetail.aboutAuthor} name='aboutAuthor' error={errors.aboutAuthor} />
            <Text onFieldBlur={onValueChange} col={4} placeholder={DICTIONARY.FORM.AUTHOR_IMAGE} value={bookDetail.authorImage} name='authorImage' error={errors.authorImage} />
            <Text onFieldBlur={onValueChange} col={4} placeholder={DICTIONARY.FORM.NATIONALITY} value={bookDetail.country} name='country' error={errors.country} />
            <Text onFieldBlur={onValueChange} col={4} placeholder={DICTIONARY.FORM.LANGUAGE} value={bookDetail.language} name='language' error={errors.language} />
            <Text onFieldBlur={onValueChange} col={2} placeholder={DICTIONARY.FORM.PAGES} value={bookDetail.pages} name='pages' error={errors.pages} />
            <Text onFieldBlur={onValueChange} col={2} placeholder={DICTIONARY.FORM.WEIGHT} value={bookDetail.weight} name='weight' error={errors.weight} />
            <Text onFieldBlur={onValueChange} col={4} placeholder={DICTIONARY.FORM.PUBLISHER} value={bookDetail.publisher} name='publisher' error={errors.publisher} />
            <Text onFieldBlur={onValueChange} col={4} placeholder={DICTIONARY.FORM.BOOK_IMAGE} value={bookDetail.image} name='image' error={errors.image} />
        </div>
        <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '2.4rem' }}>
            {iseditMode && <button onClick={() => navigate(`/booklist/${bookId}`)} className='secondary_button'>{DICTIONARY.CANCEL}</button>}
            <button onClick={addToList} >{iseditMode ? DICTIONARY.UPDATE_RECORD : DICTIONARY.ADD_NEW_BOOK_TITLE}</button>
        </div>

        <Modal modalTitle={DICTIONARY.ADD_NEW_BOOK_MODAL_HEADER} isShow={showModal} onSecondaryButtonClicked={onSecondaryButtonClicked} onPrimaryButtonClicked={onPrimaryButtonClicked} primaryButtonIcon={ICONS.BOOK_ICON} primaryButtonText={DICTIONARY.VIEW_ADDED_BOOK} onClose={() => setShowModal(false)}>
            <BookAddedModal />
        </Modal>
    </div>;
};

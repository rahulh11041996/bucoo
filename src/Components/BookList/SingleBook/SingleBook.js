import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteModal from '../../../Shared/Components/DeleteModal/DeleteModal';
import Modal from '../../../Shared/Components/Modal/Modal';
import { DICTIONARY } from '../../../Shared/Data/data';
import StoreContext from '../../../Store/StoreContext';

export const SingleBook = (props) => {

    const bookStore = React.useContext(StoreContext);

    const navigate = useNavigate();

    const [showModal, setShowModal] = React.useState(false);


    const onPrimaryButtonClicked = () => {
        setShowModal(false);
        bookStore.deleteBook(props.bookId);
        navigate("../booklist", { replace: true });
    }

    const onSecondaryButtonClicked = () => {
        setShowModal(false);
    }

    return <>
        <div className={props.activatedBookId === props.bookId ? 'book_activated single_books' : 'single_books'}>
        <div className="bookimage">
            <img src={props.image} alt="" />
        </div>
        <div className="bookdetails">
            <h3>{props.name}</h3>
            <h1>{props.bookName}</h1>
            <p>{props.description}</p>
            <div className='links_wrapper'>
                <Link to={`/booklist/${props.bookId}`}>{DICTIONARY.VIEW_DETAILS}</Link>
                <Link to={`/booklist/${props.bookId}/edit`} className='edit_button icon_button'><i className="fas fa-edit"></i></Link>
                <button onClick={() => setShowModal(true)} className='delete_button icon_button'><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
    </div>
        <Modal modalTitle={DICTIONARY.DELETE_BOOK_BUTTON} isShow={showModal} onSecondaryButtonClicked={onSecondaryButtonClicked} onPrimaryButtonClicked={onPrimaryButtonClicked} onClose={()=> setShowModal(false)}>
            <DeleteModal deletedItem={props.bookName}/>
        </Modal>
    </>;
};

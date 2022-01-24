import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoDetails from '../../../Shared/Components/NoDetails/NoDetails';
import { DICTIONARY } from '../../../Shared/Data/data';
import StoreContext from '../../../Store/StoreContext';

export const BookDetails = () => {
    const bookContext = React.useContext(StoreContext);

    let { bookId } = useParams();

    const [bookDetail, setBookDetail] = React.useState(undefined)

    useEffect(() => {
        const updatedDetails = bookContext.getBookForId(bookId);
        setBookDetail(updatedDetails[0]);
    }, [bookId]);

    if (bookDetail === undefined) {
        return <NoDetails />
    }
    return <div className='bookdetails_wrapper'>
        <h2>{DICTIONARY.BOOK_DETAILS}</h2>
        <div className="book_extra_large">
            <div className="book_image">
                <img src={bookDetail.image} alt="" />
            </div>
            <div className="books_large_description">
                <h1>{bookDetail.bookName}</h1>
                <span><b>$</b>{bookDetail.price}</span>
                <p>{bookDetail.description}</p>
                <button>{DICTIONARY.BUY_NOW}</button>
            </div>
        </div>
        <div className="book_pysical_details_wrapper">
            <div className="book_physical_card">
                <h2 className="card_header">{DICTIONARY.DETAILS}</h2>
                <div className="card_details_grid">
                    <div>
                        <span>{DICTIONARY.NO_OF_PAGES}</span>
                        <h4>{bookDetail.pages}</h4>
                    </div>
                    <div>
                        <span>{DICTIONARY.LANGUAGE}</span>
                        <h4>{bookDetail.language}</h4>
                    </div>
                    <div>
                        <span>{DICTIONARY.PUBLISHER}</span>
                        <h4>{bookDetail.publisher}</h4>
                    </div>
                    <div>
                        <span>{DICTIONARY.WEIGHT}</span>
                        <h4>{bookDetail.weight}</h4>
                    </div>
                </div>
            </div>
            <div className="book_auther_card">
                <h2 className="card_header">{DICTIONARY.AUTHOR}</h2>
                <div className="auth_details">
                    <div className="auth_img">
                        <img src={bookDetail.authorImage} alt="" />
                    </div>
                    <div className='auth_place'>
                        <h5>{bookDetail.country}</h5>
                        <h3>{bookDetail.authorName}</h3>
                    </div>
                </div>
                <p>{bookDetail.aboutAuthor}</p>
            </div>
        </div>
    </div>;
};

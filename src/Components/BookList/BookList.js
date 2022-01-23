import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import EmptyState from '../../Shared/Components/EmptyState/EmptyState';
import StoreContext from '../../Store/StoreContext';
import { SingleBook } from './SingleBook/SingleBook';

export const BookList = () => {

    let { bookId } = useParams();

    const [ isOutletActivated, setIsOutletActivated ] = React.useState(false);

    useEffect(() => {
        setIsOutletActivated(bookId ? true : false)
    }, [bookId]);

    const bookContext = React.useContext(StoreContext);

    return <div className={isOutletActivated ? 'inneroutlet' : 'no_outlet'}>
        <Outlet />
        <div className={isOutletActivated ? 'booklist_grid' : 'booklist'}>
            <h2>Book List</h2>
            { !bookContext.bookStore?.length && <EmptyState />}
            {bookContext.bookStore.map((book, index) => (
                <SingleBook activatedBookId={bookId} key={index} image={book.image} name={book.authorName} bookName={book.bookName} description={book.description} bookId={book.bookId} />
            ))}
        </div>
    </div>

};








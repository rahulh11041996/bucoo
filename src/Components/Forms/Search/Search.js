import React from 'react';
import { Link } from 'react-router-dom';
import NoDetails from '../../../Shared/Components/NoDetails/NoDetails';
import { DICTIONARY, ICONS } from '../../../Shared/Data/data';
import StoreContext from '../../../Store/StoreContext';

export default function Search() {

    const bookContext = React.useContext(StoreContext);

    const [searchResult, setSearchResult] = React.useState([]);

    const [searchText, setSearchText] = React.useState('');

    /**
     * Search text handler
     * @param event 
     */
    const onSearch = (event) => {
        const { target : { value } } = event;
        setSearchText(value)
        const dataArray = bookContext.bookStore;
        let searchData = [];
        searchData = dataArray.filter((bookData) => bookData.bookName.toLowerCase().includes(value.toLowerCase()));
        setSearchResult(searchData);
    }

    return <div className='search_box'>
        <input type="text" value={searchText} onChange={onSearch} placeholder={DICTIONARY.SEARCH} />
        { searchText.length > 0 && <div className='search_result'>
            {searchResult.length ? searchResult.map((data, index) => (<Link key={data.bookId} to={`/booklist/${data.bookId}`}>{data.bookName}</Link>)) : <h1 className='no_search_result'><i className={ICONS.SEARCH}></i> {DICTIONARY.NO_SEARCH_RESULT}</h1>}
        </div> }
    </div>;
}

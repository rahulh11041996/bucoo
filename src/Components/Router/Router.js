import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddBook } from '../AddBook/AddBook';
import { BookDetails } from '../BookList/BookDetails/BookDetails';
import { BookList } from '../BookList/BookList';
import Home from '../Home/Home';
import { Layout } from '../Layout/Layout';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route exact={true} path='booklist' element={<BookList />}>
                        <Route path=':bookId' element={<BookDetails />}></Route>
                        <Route path=':bookId/edit' element={<AddBook />}></Route>
                    </Route>
                    <Route exact={true} path='addbook' element={<AddBook />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

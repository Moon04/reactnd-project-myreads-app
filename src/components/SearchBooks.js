import React from 'react';
import Book from './Book';

const SearchBooks = ()=>{

    return(
        <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                <li>
                  <Book/>
                </li>
              </ol>
            </div>
        </div>
    );
};

export default SearchBooks;

import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const SearchBooksResults = (props)=> {

  const {searchResultsBooks, updateBookShelf} = props;

  return(
    <div className="search-books-results">
      <ol className="books-grid">
        {
          searchResultsBooks.map(book=>(
            <li key={book.id}>
              <Book 
                book={book} 
                updateBookShelf={updateBookShelf}
              />
            </li>
          ))
        }
      </ol>
    </div>
  ); 
};

SearchBooksResults.propTypes  = {
  searchResultsBooks: PropTypes.array,
  updateBookShelf: PropTypes.func
};

export default SearchBooksResults;

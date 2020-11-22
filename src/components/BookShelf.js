import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = (props)=>{

    const { shelfTitle, shelfBooks, updateBookShelf } = props;

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                {
                    shelfBooks.length > 0?
                        <ol className="books-grid">
                            {
                                shelfBooks.map(book=>(
                                    <li key={book.id}>
                                        <Book 
                                            book={book} 
                                            currentList={"shelf"}
                                            updateBookShelf={updateBookShelf}
                                        />
                                    </li>
                                ))
                            }
                        </ol>
                    :
                        <p>
                            You don't have any books in this shelf yet!
                        </p>
                }
            </div>
        </div>
    );
};

BookShelf.propTypes  = {
    shelfTitle: PropTypes.string,
    shelfBooks: PropTypes.array, 
    updateBookShelf: PropTypes.func
};

export default BookShelf;

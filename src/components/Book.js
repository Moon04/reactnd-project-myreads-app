import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

const Book = (props)=>{

    const {book, updateBookShelf} = props;

    return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.id? book.imageLinks.smallThumbnail: null})` }}></div>
                <BookShelfChanger 
                    book={book} 
                    updateBookShelf={updateBookShelf}
                />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                {
                    book.id?
                     book.authors.length > 1?
                        book.authors.map(author => (
                            author + (author !== book.authors[book.authors.length - 1]? ', ':'.')
                        ))
                        :
                        book.authors[0]
                    :
                    null
                }
            </div>
        </div>
    );
};

Book.propTypes  = {
    book: PropTypes.object,
    updateBookShelf: PropTypes.func
};

export default Book;

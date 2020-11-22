import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

const Book = (props)=>{

    const { book, currentList, updateBookShelf } = props;

    return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" 
                    style={{ width: 128, height: 193, backgroundImage: 
                        `url(${book.imageLinks? book.imageLinks.smallThumbnail: "images/default-book-cover.jpg"})` }}
                >
                </div>
                <BookShelfChanger 
                    book={book}
                    currentList={currentList} 
                    updateBookShelf={updateBookShelf}
                />
            </div>
            <div className="book-title">{book.title}</div>
            {
                book.authors && 
                <div className="book-authors">
                {
                     book.authors.length > 1?
                        book.authors.map(author => (
                            author + (author !== book.authors[book.authors.length - 1]? ', ':'.')
                        ))
                        :
                        book.authors[0]
                }
            </div>
            }
        </div>
    );
};

Book.propTypes  = {
    book: PropTypes.object,
    currentList: PropTypes.string,
    updateBookShelf: PropTypes.func
};

export default Book;

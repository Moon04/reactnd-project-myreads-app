import React from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = (props)=>{

    const {book, updateBookShelf} = props;

    const bookShelfsList = [
        {value: "move", text: "Move to..."},
        {value: "currentlyReading", text: "Currently Reading"},
        {value: "wantToRead", text: "Want to Read"},
        {value: "read", text: "Read"},
        {value: "none", text: "None"}
    ];

    const onBookShelfChange = (e)=>
        updateBookShelf(book, e.target.value);

    return(
        <div className="book-shelf-changer">
            <select 
                onChange={(e)=>onBookShelfChange(e)}
            >
                {
                    bookShelfsList.map(shelf=>(
                        <option 
                            key={shelf.value + book.id} 
                            value={shelf.value}
                        >
                            {shelf.text}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};

BookShelfChanger.propTypes  = {
    book: PropTypes.object,
    updateBookShelf: PropTypes.func
};

export default BookShelfChanger;

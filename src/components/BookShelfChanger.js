import React from 'react';

const BookShelfChanger = (props)=>{

    const bookShelfsList = [
        {value: "currentlyReading", text: "Currently Reading"},
        {value: "wantToRead", text: "Want to Read"},
        {value: "read", text: "Read"},
        {value: "none", text: "None"}
    ];

    return(
        <div className="book-shelf-changer">
            <select>
                <option value="move" disabled>Move to...</option>
                {
                    bookShelfsList.map(shelf=>(
                        <option key={shelf.value} value={shelf.value}>{shelf.text}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default BookShelfChanger;

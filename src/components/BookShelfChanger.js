import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAll } from '../BooksAPI';

class BookShelfChanger extends Component{

    static propTypes  = {
        book: PropTypes.object,
        currentList: PropTypes.string,
        updateBookShelf: PropTypes.func
    };

    state = {
        currentBooksList: []
    };

    getCurrentBooks = ()=>
        getAll().then(res=>
            this.setState((prevState)=>({
                currentBooksList: res
            }))
        );
    
    componentDidMount(){ if (this.props.currentList === 'search') this.getCurrentBooks(); }

    onBookShelfChange = (e)=>{
        this.props.updateBookShelf(this.props.book, e.target.value);
        if (this.props.currentList === 'search') this.getCurrentBooks();
    };

    render(){
        const { book, currentList } = this.props;

        const bookShelfsList = [
            {value: "move", text: "Move to..."},
            {value: "currentlyReading", text: "Currently Reading"},
            {value: "wantToRead", text: "Want to Read"},
            {value: "read", text: "Read"},
            {value: "none", text: "None"}
        ];

        return(
            <div className="book-shelf-changer">
                <select 
                    onChange={(e)=>this.onBookShelfChange(e)}
                    value={
                        currentList === 'search'?
                            (this.state.currentBooksList.filter(currentBook => currentBook.id === book.id).length > 0?
                                this.state.currentBooksList.filter(currentBook => currentBook.id === book.id)[0].shelf
                                :"none")
                            :book.shelf
                    }
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
    }
}

export default BookShelfChanger;

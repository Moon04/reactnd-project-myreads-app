import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import { getAll, update } from '../BooksAPI';

class BookList extends Component{

  state = {
    shelves: {
      currentlyReadingBooks: [],
      wantToReadBooks: [],
      readBooks: []
    }
  };

  setBooksShelvesState = (res)=>
    this.setState((prevState)=>({
      shelves: {
        currentlyReadingBooks: res.filter(book=> book.shelf === "currentlyReading") || [],
        wantToReadBooks: res.filter(book=> book.shelf === "wantToRead") || [],
        readBooks: res.filter(book=> book.shelf === "read") || []
      }
    }));
  
  updateBookShelf = (book, shelf)=>
    update(book, shelf).then(res=>
      getAll().then(res=> this.setBooksShelvesState(res))
    ); 

  componentDidMount(){ getAll().then(res=> this.setBooksShelvesState(res)); }

  render(){

    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {
                this.state.shelves.currentlyReadingBooks.length === 0 && this.state.shelves.wantToReadBooks.length === 0 
                  && this.state.shelves.readBooks.length === 0?
                  <p className="no-books">
                    You don't have any books in your library, search about books and add them to your book shelves!
                  </p>
                :

                  Object.keys(this.state.shelves).map(key=>(
                      <BookShelf 
                        key={key}
                        shelfTitle={key} 
                        shelfBooks={this.state.shelves[`${key}`]} 
                        updateBookShelf={this.updateBookShelf}
                      />
                  ))
              }
            </div>
            <div className="open-search">
              <Link to='/searchbooks'>Add a book</Link>
            </div>
        </div>
    );
  };
}

export default BookList;

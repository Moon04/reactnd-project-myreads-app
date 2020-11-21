import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import { getAll, update } from '../BooksAPI';

class BookList extends Component{

  state = {
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: []
  };

  setBooksShelfsState = (res)=>
    this.setState((prevState)=>({
      currentlyReadingBooks: res.filter(book=> book.shelf === "currentlyReading") || [],
      wantToReadBooks: res.filter(book=> book.shelf === "wantToRead") || [],
      readBooks: res.filter(book=> book.shelf === "read") || []
    }))
  
  updateBookShelf = (book, shelf)=>
    update(book, shelf).then(res=>
      getAll().then(res=> this.setBooksShelfsState(res))
    ); 

  componentDidMount(){ getAll().then(res=> this.setBooksShelfsState(res)); }

  render(){

    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {
                this.state.currentlyReadingBooks.length === 0 && this.state.wantToReadBooks.length === 0 && this.state.readBooks.length === 0?
                  <p className="no-books">
                    You don't have any books in your library, search about books and add them to your book shelfs!
                  </p>
                :
                  <div>
                    <BookShelf 
                      shelfTitle={"Currently Reading"} 
                      shelfBooks={this.state.currentlyReadingBooks} 
                      updateBookShelf={this.updateBookShelf}
                    />
                    <BookShelf 
                      shelfTitle={"Want to Read"} 
                      shelfBooks={this.state.wantToReadBooks}
                      updateBookShelf={this.updateBookShelf}
                    />
                    <BookShelf 
                      shelfTitle={"Read"} 
                      shelfBooks={this.state.readBooks}
                      updateBookShelf={this.updateBookShelf}
                    />
                  </div>
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

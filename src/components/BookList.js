import React, {Component} from 'react';
import BookShelf from './BookShelf';
// import * as BooksAPI from './BooksAPI'

class BookList extends Component{

    render(){
        return(
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                      <BookShelf shelfTitle={"Currently Reading"}/>
                      <BookShelf shelfTitle={"Want to Read"}/>
                      <BookShelf shelfTitle={"Read"}/>
                  </div>
                </div>
                <div className="open-search">
                  <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
        );
    };
}

export default BookList;

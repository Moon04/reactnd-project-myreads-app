import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBooksResults from './SearchBooksResults';
import { search, update } from '../BooksAPI';

class SearchBooks extends Component {

  state= {
    query: '',
    queryError: '',
    searchResultsBooks: []
  }

  onInputChange = ({target}) =>
    this.setState((prevState)=>({
      query: target.value,
      queryError: '',
      searchResultsBooks: []
    }));

  handleSearchInput = ({key})=>{
    if (this.state.query && key === 'Enter'){
      search(this.state.query).then(res=> {
        if (res.error){
          this.setState((prevState)=>({ queryError: res.error }));
          this.setState((prevState)=>({ searchResultsBooks: [] }));
        }
        else{
          this.setState((prevState)=>({ queryError: '' }));
          this.setState((prevState)=>({ searchResultsBooks: res }));
        }
      });
    }
  };

  updateBookShelf = (book, shelf)=>
    update(book, shelf); 

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author" 
              value={this.state.searchQueary} 
              onChange={this.onInputChange} 
              onKeyPress={this.handleSearchInput}
            />
          </div>
        </div>
        {
          this.state.searchResultsBooks.length > 0 &&
          <SearchBooksResults 
            searchResultsBooks={this.state.searchResultsBooks} 
            updateBookShelf={this.updateBookShelf}
          />
        }
        {
          this.state.queryError? 
            <div className="search-error">
              <p>This query doesn't match any book title or author, try again!</p>
            </div>
          :
          null
        }
      </div>
    );
  }
}

export default SearchBooks;

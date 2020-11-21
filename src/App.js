import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './components/BookList'
// import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
          {/* <SearchBooks /> */}
          <BookList />
      </div>
    )
  }
}

export default BooksApp

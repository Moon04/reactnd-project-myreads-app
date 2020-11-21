import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import BookList from './components/BookList'
import SearchBooks from './components/SearchBooks';

const BooksApp = ()=> (
  <div className="app">
    <Switch>
      <Route path='/searchbooks' component={SearchBooks}/>
      <Route path='/' component={BookList}/>
    </Switch>
  </div>
);

export default BooksApp

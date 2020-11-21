# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course. 
It's a simple project created to practise all the concepts explained in the React Fundamentals course.


# React Concepts Used In This App

* Component Composition
* State Management
* Passing Data Between Components Using Props
* Functional Components
* Rendering UI Based on State
* Lifecycle Events
* React Router


## Instructions to use this repo:

To get started right away and try the application:

* install all project dependencies with `npm install`
* start the server with `npm start`


Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

I've used the backend server that React nadndegree's team've provided for us to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods I've used to perform all needed operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```
* Used to get all books currently in the bookshelves in the app

### `update`

Method Signature:

```js
update(book, shelf)
```

* Used to switch between shelfs for any chosen book in the app

### `search`

Method Signature:

```js
search(query)
```
* Used to get a collection of a max of 20 book objects that their titles or authors names match the search query.
* These books do not know which shelf they are on. We need to choose a shelf to add any book to.

## App Details

* The main page contains 3 shelfs of books currently reading, want to read and read, 
    each shelf contain books according to their shelf value.
* User can change book shelf between 4 options currently reading, want to read, read and none, 
    for the last option this book will be removed of your current books list.
* User can add new books as much as he want, he just need to type the book title or authors names and hit the enter key, 
    a list of books that match search query will appear and the user can specify the shelf he want to add any book to.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

# MyReads Project

This is the final assessment project for the Udacity React Fundamentals course. 
It's a simple project created to practice all the concepts explained in the React Fundamentals course.


# React Concepts Used In This App

* Component Composition
* State Management
* Passing Data Between Components Using Props
* Functional Components
* Rendering UI Based on State
* Lifecycle Events
* React Router


## Instructions to use this repo:

To get started right away and check the application:

* install all project dependencies with `npm install`
* start the server with `npm start`


## Backend Server

I've used the backend server that React nanodegree team has provided for us to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods I've used to perform all needed operations on the backend:

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

* Used to switch between shelves for any chosen book in the app

### `search`

Method Signature:

```js
search(query)
```
* Used to get a collection of a max of 20 book objects that their titles or authors' names match the search query.
* These books do not know which shelf they are on. We need to choose a shelf to add any book to.

## App Details

* The main page contains 3 shelves of books currently reading, want to read, and read, 
    each shelf contains books according to their shelf value.
* User can change bookshelf between 4 options currently reading, want to read, read and none, 
    for the last option this book will be removed from your current books list.
* User can add new books as much as he wants, he just needs to type the book title or authors' names and hit the enter key, 
    a list of books that match the search query will appear and the user can specify the shelf he wants to add any book to.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

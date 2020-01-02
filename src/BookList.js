import React, { Component } from 'react'
import Book from './Book'

export default class BookList extends Component {

  state = {
    books : [
      {
        id: 1,
        book: 'book number 1',
        author: 'John Doe'
      },
      {
        id: 2,
        book: 'book number 2',
        author: 'Bobby Doe'
      },
      {
        id: 3,
        book: 'book number 3',
        author: 'Peter Doe'
      },
    ]
  }

  // this.setState({})

  render() {
    // const books = this.state.books.map( (item) => item.book )
    // console.log(books);
    
    // filter
    // forEach
    // map
    // reduce
    
    return (
      <section>
        <h3>This is our BookList</h3>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item} />
        ))}
      </section>
    )
  }
}

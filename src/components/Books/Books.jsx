import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

const [books, setBooks] = useState([]);

useEffect(() => {
    fetch('books.json')
    .then(res => res.json())
    .then(data => setBooks(data))
}, [])

  return (
    <div className="mx-10 md:mx-20 lg:mx-40 mt-5 md:mt-10 mb-5 md:mb-10">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-black text-center font-bold">
          BOOKS
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            books.map(book => <Book key={book.bookid} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;

import { Link, useLoaderData } from "react-router-dom";
import Nav from "../NavBar/Nav";

import { useEffect, useState } from "react";
import { getReadBooks, getWhishBooks } from "../Utility/localStorage";
import ReadBook from "../ReadBook/ReadBook";

const ListedBooks = () => {
  const books = useLoaderData();
  const [readbooks, setReadBooks] = useState([]);
  const [showReadBooks, setShowReadBooks] = useState(true);

  useEffect(() => {
    const storedBookIds = getReadBooks();
    if (books.length > 0) {
      const readBooks = books.filter((book) =>
        storedBookIds.includes(book.bookid)
      );
      setReadBooks(readBooks);
    }
  }, []);

  const [whishBooks, setWhishBooks] = useState([]);

  useEffect(() => {
    const storedWhishBookIds = getWhishBooks();
    if (books.length > 0) {
      const whishBooks = books.filter((book) =>
        storedWhishBookIds.includes(book.bookid)
      );
      setWhishBooks(whishBooks);
    }
  }, []);

  return (
    <>
      <Nav></Nav>
      <div className="mx-10 md:mx-20 lg:mx-40 mt-5 md:mt-10 mb-5 md:mb-10">
        <div className="bg-gray-500 mx-10 md:mx-20 lg:mx-40 text-center rounded-lg p-16 mt-5 mb-5 text-3xl text-white font-bold">
          <h1 className="text-black">BOOKS</h1>
        </div>
        <div className="flex gap-4">
          <Link>
            <button
              onClick={() => setShowReadBooks(true)}
              className="border p-2 rounded-t-md"
            >
              Read Books
            </button>
          </Link>
          <Link>
            <button
              onClick={() => setShowReadBooks(false)}
              className="border p-2 rounded-t-md"
            >
              Whish Books
            </button>
          </Link>
        </div>
        <hr />

        {showReadBooks ? (
          <div>
            {readbooks.map((book) => (
              <ReadBook book={book}></ReadBook>
            ))}
          </div>
        ) : (
          <div>
            {whishBooks.map((book) => (
              <ReadBook book={book}></ReadBook>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ListedBooks;

import { useLoaderData, useParams } from "react-router-dom";
import Nav from "../NavBar/Nav";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookid } = useParams();
  const bookIdInt = parseInt(bookid);
  const book = books.find((book) => book.bookid === bookIdInt);

  const {
    bookname,
    author,
    image,
    review,
    totalpages,
    rating,
    category,
    tags,
    publisher,
    year_of_publishing,
  } = book;

  return (
    <div>
      <Nav />
      <div className=" mx-4 md:flex md:mx-30 lg:mx-44 md:gap-12 justify-center mt-5 mb-5 space-y-5 md:space-y-0">
        <div className="bg-gray-300 rounded-lg md:flex md:items-center">
          <img
            className="w-auto h-auto md:w-[425px] md:h-fit lg:w-[425px] lg:h-[564px] mx-auto p-10 md:p-12 lg:p-16"
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-5">
          <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold">
            {bookname}
          </h1>
          <p className="text-black text-xl md:text-2xl lg:text-3xl font-semibold">
            By: {author}
          </p>
          <hr />
          <p className="text-xl text-black">Fiction</p>
          <hr />
          <p className="text-black font-semibold">
            Review: <span className="text-gray-500">{review}</span>
          </p>
          <div className="flex gap-4 items-center text-black font-semibold">
            Tag:{" "}
            {tags.map((tag) => (
              <p className="text-green-600 bg-[#23BE0A1A] p-2 rounded-lg">
                #{tag}
              </p>
            ))}
          </div>
          <hr />
          <h3>
            Number of Pages:{" "}
            <span className="text-black font-semibold]">{totalpages}</span>
          </h3>
          <h3>
            Publisher:{" "}
            <span className="text-black font-semibold]">{publisher}</span>
          </h3>
          <h3>
            Year of Publishing:{" "}
            <span className="text-black font-semibold]">
              {year_of_publishing}
            </span>
          </h3>
          <h3>
            Rating: <span className="text-black font-semibold]">{rating} </span>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookid,
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
    <Link to="/book-details">
      <div className="border border-black p-6 space-y-5 rounded-lg flex flex-col ">
        <div className="bg-gray-200 rounded-lg p-5 ">
          <img className="w-[134px] h-[184px] mx-auto" src={image} alt="" />
        </div>
        <div className="flex gap-4">
          {tags.map((tag) => (
            <p className="text-green-600 bg-[#23BE0A1A] p-2 rounded-lg">
              {tag}
            </p>
          ))}
        </div>
        <h1 className=" text-xl md:text-2xl font-semibold text-black">
          {bookname}
        </h1>
          <h5 className="text-base md:text-xl md::font-semibold text-black">
            By: {author}
          </h5>
          <br />
          <hr className="border border-dashed" />
          <div className="flex justify-between text-black mt-10 mb-10">
            <p className="text-base font-semibold text-black">Fiction:</p>
            <div className="flex items-center gap-2">
              <p>{rating}</p>
              <CiStar></CiStar>
            </div>
          </div>
        </div>
    </Link>
  );
};

export default Book;

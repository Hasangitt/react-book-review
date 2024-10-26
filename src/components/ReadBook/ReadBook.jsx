import React from "react";
import { Link } from "react-router-dom";

const ReadBook = ({ book }) => {
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
    <div className=" md:flex gap-2 items-center border border-black rounded-lg mb-6 p-5">
      <div className="bg-gray-500 rounded-lg m-5">
        <img className="w-[130px] mx-auto p-5" src={image} alt="" />
      </div>
      <div className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold">{bookname}</h1>
        <p className="text-black text-xl md:text-2xl lg:text-3xl">By: {author}</p>
      </div>
      <div className="flex gap-4">
        {tags.map((tag) => (
          <p className="text-green-600 bg-[#23BE0A1A] w-[150px] flex items-center justify-center text-center p-2 rounded-lg">{tag}</p>
        ))}
      </div>
     <div className=" flex-col md:flex gap-2">
     <p className="text-black text-base font-semibold w-[360px]">Publisher: <span className="text-gray-500">{publisher}</span></p>
     <p className="text-black text-base font-semibold">Pages: <span className="text-gray-500">{totalpages}</span></p>
     </div>
     
     <div className="flex flex-col md:grid md:grid-cols-3 justify-center items-center gap-10">
        <p className="bg-[#328EFF1A] p-2 w-[175px] rounded-full text-center text-blue-600">Category: {category}</p>
        <p className="bg-[#FFAC331A] p-2 w-[175px] rounded-full text-center text-amber-500">Rating: {rating}</p>
        <Link><button className="bg-[#23BE0A] w-[175px] p-2 rounded-full text-center text-white">View Details</button></Link>
     </div>
      </div>
    </div>
  );
};

export default ReadBook;



const Book = ({book}) => {

    const {bookid, bookname, author, image, review, totalpages, rating, category, tags, publisher, year_of_publishing} = book;

    return (
        <div className="border border-black p-6 ">
            <div className="bg-gray-200 rounded-lg p-5 ">
            <img className="w-[134px] h-[184px] mx-auto" src={image} alt="" />
            </div>
            <div className="flex gap-4">
                {
                    tags.map(tag => <p className="text-green-600 bg-[#23BE0A1A] p-2 rounded-lg">{tag}</p>)
                }
            </div>
            <h1 className="text-3xl font-semibold text-black">{bookname}</h1>
            <h5 className="text-xl font-semibold text-black">By: {author}</h5>
            <p className="text-base font-semibold text-black">Fiction {rating}</p>
        </div>
    );
};

export default Book;








import { Link } from 'react-router-dom';
import bannerImg from '../../assets/images/pngwing 1.png'

const Banner = () => {
    return (
        <>
        <div className='items-center rounded-lg md:flex md:flex-row-reverse space-y-10 md:space-y-0 justify-center md:justify-between lg:justify-evenly mx-10 md:mx-20 lg:mx-40 mt-5 md:mt-10 mb-5 md:mb-10 bg-gray-200 p-5 md:px-16 lg:px-32 '>
            <div>
                <img className='w-[150px] md:w-[300px] lg:w-auto mx-auto md:mx-0' src={bannerImg} alt="" />
            </div>
            <div className='text-center md:text-start space-y-10 md:space-y-0 lg:space-y-5'>
                <h1 className='w-auto lg:w-[650px] text-2xl md:text-4xl lg:text-7xl text-black font-bold md:mb-5'>Books to freshen up your bookshelf</h1>
               <Link to='/listed-books'><button className='btn btn-success text-white'>View The List</button></Link>
            </div>
        </div>
    </>
    );
};

export default Banner;
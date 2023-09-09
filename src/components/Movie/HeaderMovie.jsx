import { FaRegPlayCircle } from "react-icons/fa";

const HeaderMovie = ({ movie }) => {
    const bgImg = {
        backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}')`,
    };

    const img = {
        width: "calc(((100vw/1.8))/1.5)",
        height: "calc((100vw/1.8))",
    };

    return (
        <header
            style={bgImg}
            className='h-[45vh] w-full min-w-full relative bg-cover bg-no-repeat bg-left'
        >
            <div className='bg-gradiant absolute top-0 left-0 w-full h-[101%]'></div>
            <img
                className='absolute z-10 rounded  bottom-6 left-5 min-w-[140px] min-h-[208px]'
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={movie?.title}
                style={img}
            />
            <div className='w-[50%] h-full ml-auto relative'>
                <div className='absolute top-[65%] -translate-y-[65%] left-10'>
                    <FaRegPlayCircle size={60} color='white' />
                </div>
            </div>
        </header>
    );
};

export default HeaderMovie;

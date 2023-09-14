import { FaRegPlayCircle } from "react-icons/fa";
import Porcentaje from "../Porcentaje";
import Ligth from "./Ligth";

const HeaderMovie = ({ movie, setPlaying }) => {
    const bgImg = {
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
    };
    const url = `https://image.tmdb.org/t/p/original/${movie?.poster_path}`

    const handleTrailer = () => {
        setPlaying(true)
        console.log('Desplegar trailer')
    }

    return (
        <header
            style={bgImg}
            className='h-[45vh] sm:h-[50vh] md:h-[55vh] w-full min-w-full relative bg-cover bg-no-repeat   bg-left'
        >
            <div className='bg-gradiant absolute top-0 left-0 w-full h-[101%]'></div>
            <Ligth img={url}/>
            <img
                className='absolute z-10 rounded bottom-4 left-6 w-[130px] movieId:w-[170px]  sm:w-[200px] sm:bottom-4 sm:left-8 md:left-10 lg:w-[220px] xl:left-12 2xl:left-16 xl:w-[240px] object-contain'
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={movie?.title}
            />
            <div className='w-[50%] h-full ml-auto relative'>
                <div 
                    className='cursor-pointer absolute top-[65%] -translate-y-[65%] left-10 transition-transform   hover:scale-110'
                    onClick={handleTrailer}
                >
                    <FaRegPlayCircle size={60} color='white' />
                </div>
            </div>
            <div className="absolute right-6 -bottom-6 md:right-10 md:-bottom-10 lg:right-12 xl:right-14 2xl:right-16 bg-gray-950 rounded-full">
                <Porcentaje movie={movie}/>
            </div>
        </header>
    );
};

export default HeaderMovie;

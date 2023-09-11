import { FaRegPlayCircle } from "react-icons/fa";
import Porcentaje from "../Porcentaje";

const HeaderMovie = ({ movie, setPlaying }) => {
    const bgImg = {
        backgroundImage: `url('https://image.tmdb.org/t/p/w780/${movie?.backdrop_path}')`,
    };

    const img = {
        width: "calc(((100vw/1.8))/1.5)",
        height: "calc((100vw/1.8))",
    };

    const handleTrailer = () => {
        setPlaying(true)
        console.log('Desplegar trailer')
    }


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
                <div 
                    className='cursor-pointer absolute top-[65%] -translate-y-[65%] left-10 transition-transform   hover:scale-110'
                    onClick={handleTrailer}
                >
                    <FaRegPlayCircle size={60} color='white' />
                </div>
            </div>
            <div className="absolute right-6 -bottom-6 bg-gray-950 rounded-full">
                <Porcentaje movie={movie}/>
            </div>
        </header>
    );
};

export default HeaderMovie;

import { FaRegPlayCircle } from "react-icons/fa";
import Porcentaje from "../Porcentaje";
import Ligth from "./Ligth";
import { useEffect, useState } from "react";
import "../style/transition.css";

const HeaderMovie = ({ movie, setPlaying, desplegarInfo }) => {

    const [backgroundImage, setBackgroundImage] = useState(
        `https://image.tmdb.org/t/p/original/${desplegarInfo()?.backdrop_path}`
    );

    useEffect(() => {
        if (movie) {
            const handleResize = () => {
                if (window.innerWidth >= 1024) {
                    setBackgroundImage(
                        `https://image.tmdb.org/t/p/original/${desplegarInfo()?.backdrop_path}`
                    );
                } else {
                    setBackgroundImage(
                        `https://image.tmdb.org/t/p/w780/${desplegarInfo()?.backdrop_path}`
                    );
                }
            };

            window.addEventListener("resize", handleResize);
            handleResize();

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, [movie]);

    const bgImg = {
        backgroundImage: `url(${backgroundImage})`,
    };

    const url = desplegarInfo()?.poster_path
        ? `https://image.tmdb.org/t/p/original${desplegarInfo()?.poster_path}`
        : "";

    // desplegar trailer
    const handleTrailer = () => {
        setPlaying(true);
    };

    return (
        <header
            style={desplegarInfo()?.backdrop_path ? bgImg : {}}
            className='h-[46vh] sm:h-[50vh] md:h-[55vh] w-full min-w-full relative bg-cover bg-no-repeat   bg-left'
        >
            <div className='bg-gradiant absolute top-0 left-0 w-full h-[101%] '></div>
            {/* <Ligth img={url}/> */}
            <div className=': w-full relative h-[46vh] sm:h-[50vh] md:h-[55vh] max-w-[1400px] mx-auto'>
                <img
                    className={`full-embed absolute z-10 rounded bottom-4 left-6 w-[130px] movieId:w-[170px]  sm:w-[200px] sm:bottom-4 sm:left-8 md:left-10 lg:w-[220px] xl:left-12 xl:w-[240px] object-contain 2xl:left-16`}
                    src={`https://image.tmdb.org/t/p/w500/${desplegarInfo()?.poster_path}`}
                    alt={desplegarInfo()?.title}
                />
                <div className='w-[50%] h-full ml-auto relative bottom-0'>
                    <div
                        className='cursor-pointer opacity-70 hover:opacity-80 absolute sm:translate-y-1/2 sm:top-[40%] sm:-left-8  top-[65%] -translate-y-[65%] left-10 transition-all duration-300  hover:scale-110'
                        onClick={handleTrailer}
                    >
                        <FaRegPlayCircle
                            size={60}
                            color='white'
                            className='sm:w-[72px] sm:h-[72px] md:w-[80px] md:h-[80px]'
                        />
                    </div>
                </div>
                <div className='absolute right-6 -bottom-6 md:right-10 md:-bottom-10 lg:right-12 xl:right-14 2xl:right-16 bg-gray-950 rounded-full'>
                    <Porcentaje movie={desplegarInfo()} />
                </div>
            </div>
        </header>
    );
};

export default HeaderMovie;

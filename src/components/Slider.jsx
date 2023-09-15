import React, { useEffect, useRef } from "react";

import useFetch from "../hooks/useFetch";
import SliderMovie from "./SliderMovie";
import {
    MdKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Slider = ({ path, titulo, subtitulo, query, isMovie }) => {

    const nextEl = useRef(null);
    const prevEl = useRef(null);

    // peliculas mas populares
    const baseUrl = "https://api.themoviedb.org/3";
    const [movies, getMovies, isError, loading] = useFetch(baseUrl);

    // obtener los datos de la api
    useEffect(() => {
        getMovies(path, query);
    }, []);

    return (
        <article className='text-white'>
            <header className='mb-4'>
                <h3 className='font-semibold text-lg mb-1'>{titulo}</h3>
                {subtitulo && <p className='opacity-80 text-xs sm:text-sm'>{subtitulo}</p>}
            </header>
            <div className='relative'>
                <SliderMovie movies={movies} isMovie={isMovie} nextEl={nextEl } prevEl={prevEl}/>
                {/* Botón Controller */}
                <div ref={nextEl} className={` swiper-button-next absolute top-[60%] -right-8 transform -translate-y-1/2 w-8  text-white opacity-80 after:content-none`}>
                    <MdOutlineKeyboardArrowRight
                        size={40}
                    />
                </div>
                <div ref={prevEl} className={`swiper-button-prev absolute top-[60%] -left-8 transform -translate-y-1/2 w-8 text-white opacity-80 after:content-none`}>
                    <MdKeyboardArrowLeft size={40} />
                </div>
            </div>
        </article>
    );
};

export default Slider;

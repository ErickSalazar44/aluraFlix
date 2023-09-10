import React, { useCallback, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import useFetch from "../hooks/useFetch";
import SliderMovie from "./SliderMovie";
import { useNavigate } from "react-router-dom";

const Slider = ({ path, titulo, subtitulo, query, isMovie }) => {
    // peliculas mas populares
    const baseUrl = "https://api.themoviedb.org/3";
    const [movies, getMovies, isError, loading] = useFetch(baseUrl);
    
    const navigate = useNavigate()

    useEffect(() => {
        // obtener los datos de la api
        getMovies(path, query);
    }, []);

    //-----------------------------------------------------------------------------//

    // Funcion para navegar 
    const navigateMovie = useCallback(
        (id) => {
            console.log(`seleccionaste este id: ${id}`);
            console.log(`${isMovie}/${id}`); 
            navigate(`${isMovie}/${id}`);
        },
        [isMovie]
    );
        


    return (
        <article className='text-white'>
            <header className="mb-4">
                <h3 className='font-semibold text-lg mb-1'>{titulo}</h3>
                {subtitulo && <p className="opacity-80 text-sm">{subtitulo}</p>}
            </header>
            <SliderMovie movies={movies} isMovie={isMovie} navigateMovie={navigateMovie}/>
        </article>
    );
};

export default Slider;

import React, { useEffect } from "react";

import useFetch from "../hooks/useFetch";
import SliderMovie from "./SliderMovie";


const Slider = ({ path, titulo, subtitulo, query, isMovie }) => {
    // peliculas mas populares
    const baseUrl = "https://api.themoviedb.org/3";
    const [movies, getMovies, isError, loading] = useFetch(baseUrl);
    
    // obtener los datos de la api
    useEffect(() => {
        getMovies(path, query);
    }, []);

    return (
        <article className='text-white'>
            <header className="mb-4">
                <h3 className='font-semibold text-lg mb-1'>{titulo}</h3>
                {subtitulo && <p className="opacity-80 text-sm">{subtitulo}</p>}
            </header>
            <SliderMovie movies={movies} isMovie={isMovie}/>
        </article>
    );
};

export default Slider;

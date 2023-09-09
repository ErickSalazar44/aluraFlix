import React, { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Slider = ({ path, titulo, subtitulo, query, isMovie }) => {
    // peliculas mas populares
    const baseUrl = "https://api.themoviedb.org/3";
    const [movies, getMovies, isError, loading] = useFetch(baseUrl);
    useEffect(() => {
        // obtener los datos de la api
        getMovies(path, query);
    }, []);

    //-----------------------------------------------------------------------------//
    const navigate = useNavigate()


    const navigateMovie = (id) => {
        console.log(`seleccionaste este id: ${id}`)
        navigate(`${isMovie}/${id}`)
    }


    return (
        <article className='text-white'>
            <header className="mb-4">
                <h3 className='font-semibold text-lg mb-1'>{titulo}</h3>
                {subtitulo && <p className="opacity-80 text-sm">{subtitulo}</p>}
            </header>
            <Swiper slidesPerView={2} spaceBetween={11} className='mySwiper'>
                {movies?.results.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div 
                            className='cursor-pointer transition duration-300 filter saturate-[0.9] hover:saturate-[1.1] border-transparent border-2 hover:border-cyan-600'
                            onClick={() => navigateMovie(movie.id)}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.name}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </article>
    );
};

export default Slider;

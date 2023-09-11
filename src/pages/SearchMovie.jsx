import { useDispatch, useSelector } from "react-redux";
import { Input } from "../components/Search/Input";
import { fetchGenres } from "../store/slices/genresSlice";
import { useEffect, useState } from "react";
import SliderGenre from "../components/Search/SliderGenre";
import useFetch from "../hooks/useFetch";
import GridMovie from "../components/Search/GridMovie";
import { useNavigate } from "react-router-dom";

const SearchMovie = () => {
    // Traemos los generos
    const genres = useSelector((state) => state.genresMovies);
    const movies = useSelector((state) => state.homeMovies.movies)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    // Traemos Peliculas mas populares
    const baseUrl = "https://api.themoviedb.org/3";
    const path = "/trending/tv/week";

    const [popularMovies, getMovies] = useFetch(baseUrl);
    const [searchType, setSearchType ] = useState('/tv')

    //TODO BUSCAR PELICULA EN SEARCH CREA UN ESTADO Y GUARDA EL VALOR ENVIADO POR EL USUARIO
    useEffect(() => {
        if (genres.length === 0) {
            dispatch(fetchGenres())
        }
        if (movies.length === 0) {
            getMovies(path)
        }
    }, [])
    
    const moviesToUse = movies.length === 0 ? popularMovies : movies;

    const handleNavigate = (id) => {
        navigate(`${searchType}/${id}`)
    }

    return (
        <div className='px-6 pt-[86px]'>
            <Input text='¿Qué estás buscando?' />

            {/* GENEROS */}
            <div className="my-6">
                <SliderGenre genres={genres}/>
            </div>

            {/* MOSTRAR PELICULAS POPULARES */}
            <div className="mt-10">
                <h2 className="text-white font-semibold text-lg mb-6">Búsquedas populares</h2>
                <GridMovie moviesToUse={moviesToUse} handleNavigate={handleNavigate}/>
            </div>
        </div>
    );
};

export default SearchMovie;

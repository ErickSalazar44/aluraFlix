import { useDispatch, useSelector } from "react-redux";
import { Input } from "../components/Search/Input";
import { fetchGenres } from "../store/slices/genresSlice";
import { useEffect, useState } from "react";
import SliderGenre from "../components/Search/SliderGenre";
import useFetch from "../hooks/useFetch";
import GridMovie from "../components/Search/GridMovie";
import { useNavigate } from "react-router-dom";
import useSearchMovie from "../hooks/useSearchMovie";

const SearchMovie = () => {
    // Traemos los generos
    const genres = useSelector((state) => state.genresMovies);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Traemos Peliculas mas populares
    const baseUrl = "https://api.themoviedb.org/3";
    
    const [seriesOrMovies, getSeriesOrMovies] = useFetch(baseUrl);
    const [searchType, setSearchType] = useState("tv");
    
    const path = `/trending/${searchType}/day`;

    // traemos la busqueda del usuario
    const [datos, getMovie, isSearchError] = useSearchMovie(searchType);
    const [inputValue, setInputValue] = useState("");

    //TODO BUSCAR PELICULA EN SEARCH CREA UN ESTADO Y GUARDA EL VALOR ENVIADO POR EL USUARIO
    useEffect(() => {
        if (genres.length === 0) {
            dispatch(fetchGenres());
        }

    }, []);

    useEffect(() => {

        getSeriesOrMovies(path);
    }, [searchType])


    const goSearch = (e) => {
        e.preventDefault();
        getMovie(inputValue);
        setInputValue('')
    };

    // ACA
    const handleNavigate = (id) => {
        navigate(`/${searchType}/${id}`);
    };


    return (
        <div className='px-6 pt-[70px]'>
            <div className="text-white text-sm mb-4 font-semibold w-full flex justify-around items-center">
                <span className={`cursor-pointer ${searchType === 'tv' && 'text-[#b1a4fc]'}`} onClick={() => setSearchType('tv')}>Series</span>
                <span className={`cursor-pointer ${searchType === 'movie' && 'text-[#b1a4fc]'}`} onClick={() => setSearchType('movie')}>Películas</span>
            </div>

            <Input
                text='¿Qué estás buscando?'
                goSearch={goSearch}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />

            {/* GENEROS */}
            <div className='my-6'>
                <SliderGenre genres={genres} />
            </div>

            {/* MOSTRAR PELICULAS POPULARES */}
            {!datos ? (
                <div className='mt-10'>
                    <h2 className='text-white font-semibold text-lg mb-6'>
                        Búsquedas populares
                    </h2>
                    <GridMovie
                        moviesToUse={seriesOrMovies}
                        handleNavigate={handleNavigate}
                    />
                </div>
            ) : (
                <div className='mt-10'>
                    <h2 className='text-white font-semibold text-lg mb-6'>
                        Búsquedas populares
                    </h2>
                    <GridMovie
                        moviesToUse={datos}
                        handleNavigate={handleNavigate}
                    />
                </div>
            )}
        </div>
    );
};

export default SearchMovie;

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchGenres } from "../store/slices/genresSlice";
import useFetch from "../hooks/useFetch";
import useSearchMovie from "../hooks/useSearchMovie";
import SliderGenre from "../components/Search/SliderGenre";
import { Input } from "../components/Search/Input";
import GridMovie from "../components/Search/GridMovie";
import LoadingSearch from "../components/Loading/SearchMovie/LoadingSearch";
import MovieNoEncontrado from "../components/Search/MovieNoEncontrado";

const SearchMovie = () => {
    // Traemos los generos y type serie (movie o tv)
    const genres = useSelector((state) => state.genresMovies);
    const searchType = useSelector((state) => state.type);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Traemos Peliculas mas populares
    const baseUrl = "https://api.themoviedb.org/3";
    const [seriesOrMovies, getSeriesOrMovies, isError, loading] =
        useFetch(baseUrl);

    // traemos la busqueda del usuario
    const [datos, getMovie, , resetValue, loadingSearchUser] = useSearchMovie(searchType);
    const [inputValue, setInputValue] = useState("");

    const [userGenre, setUserGenre] = useState("");

    useEffect(() => {
        dispatch(fetchGenres(searchType));
        const genreQueryParam = `with_genres=${userGenre}`;
        const url = `/discover/${searchType}`;
        const query = `${genreQueryParam}`;

        getSeriesOrMovies(url, query); // Llama a getSeriesOrMovies con la

        resetValue(null)
    }, [searchType, userGenre]);

    const goSearch = (e) => {
        e.preventDefault();
        getMovie(inputValue);
        setInputValue("");
    };

    const handleNavigate = (id) => {
        navigate(`/${searchType}/${id}`);
    };

    if (loading || loadingSearchUser) {
        return <LoadingSearch />;
    }

    return (
        <div className='px-8 md:px-10 lg:px-12 2xl:px-16 pt-[80px] flex-grow'>
            {isError && <p>Hubo un error al cargar las peliculas</p>}
            {!loading && !isError && (
                <>
                    <Input
                        text='¿Qué estás buscando?'
                        goSearch={goSearch}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                    {/* GENEROS */}
                    <div className='my-6'>
                        <SliderGenre
                            genres={genres}
                            setUserGenre={setUserGenre}
                        />
                    </div>
                    {/* MOSTRAR PELICULAS POPULARES */}
                    {
                        datos?.results.length === 0 
                        ? <MovieNoEncontrado/>
                        : 
                        <main className='mt-10'>
                            <h2 className='text-white font-semibold text-lg mb-6'>
                                Búsquedas populares
                            </h2>
                            <GridMovie
                                moviesToUse={datos ? datos : seriesOrMovies}
                                handleNavigate={handleNavigate}
                            />
                        </main>
                    }

                </>
            )}
        </div>
    );
};

export default SearchMovie;

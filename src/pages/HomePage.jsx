import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import MovieSlider from "../components/Home/MovieSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../store/slices/genresSlice";
import { NavBar } from "../components/Header/NavBar";

const HomePage = () => {
    // peliculas mas populares
    const baseUrl = "https://api.themoviedb.org/3";
    const path = "/movie/popular";

    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genresMovies);

    const [popularMovies, getMovies, isError, loading] = useFetch(baseUrl);

    useEffect(() => {
        // obtener los datos de la api
        getMovies(path);
    }, []);

    useEffect(() => {
        // obtener los generos de la api
        if (!genres.length) {
            dispatch(fetchGenres());
        }
    }, [genres]);

    return (
        <div>
            {loading && <p>Cargando...</p>}
            {isError && <p>Hubo un error al cargar las peliculas</p>}
            {!loading && !isError && (
                <>
                    <NavBar />
                    <MovieSlider
                        movies={popularMovies?.results.slice(0, 7)}
                        genres={genres}
                    />
                    <section className="min-h-screen w-full"></section>
                    <section className="min-h-screen w-full"></section>
                </>
            )}
        </div>
    );
};

export default HomePage;

import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import MovieSlider from "../components/Home/MovieSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../store/slices/genresSlice";
import { NavBar } from "../components/Header/NavBar";
import PublicityPage from "../components/Home/PublicityPage";
import Slider from "../components/Slider";

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
                    <PublicityPage url='/anuncio.avif' />
                    <section className='px-8'>
                        <div className='mb-7'>
                            <Slider
                                path='/trending/tv/week'
                                titulo='Lo más popular'
                            />
                        </div>
                        <div className='mb-7'>
                            <Slider
                                path='/movie/popular'
                                query={"page=2"}
                                titulo='Del cine a tu casa'
                                subtitulo={
                                    "Culturas valiosas. Historias diversas. Energía vibrante."
                                }
                            />
                        </div>
                    </section>
                    {/* Anuncio 2 */}
                    <PublicityPage
                        url={
                            "https://art-gallery-latam.api.hbo.com/images/fzElsTTwA7Knig15UGwmN$$$LFEFOOTER$$$latam/background?v=f30a3f85c906dc49eb62955118d74cdb&format=png&size=400x400&compression=low&protection=false&scaleDownToFit=false&language=es-419"
                        }
                    />
                    <section className='px-8'>
                        <div className='mb-7'>
                            <Slider
                                path='/tv/top_rated'
                                titulo='Noche de pelis todos los días'
                            />
                        </div>
                        <div className='pb-7'>
                            <Slider
                                path='/movie/top_rated'
                                titulo='Colecciones icónicas'
                                subtitulo={
                                    "Historias inolvidables que nos robaron el corazón."
                                }
                            />
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default HomePage;

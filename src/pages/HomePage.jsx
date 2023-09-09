import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import MovieSlider from "../components/Home/MovieSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../store/slices/genresSlice";
import PublicityPage from "../components/Home/PublicityPage";
import Slider from "../components/Slider";

const HomePage = () => {
    // peliculas mas populares
    const baseUrl = "https://api.themoviedb.org/3";
    const path = "/trending/tv/week";

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
                    
                    <MovieSlider
                        movies={popularMovies?.results.slice(0, 7)}
                        genres={genres}
                    />


                    <section className='px-8 mt-8 mb-4 text-white'>
                        <h4 className="font-semibold text-lg">Episodios Gratuitos</h4>
                        <p className="opacity-80 text-sm">Emociónate con estrenos de películas y series icónicas.</p>
                    </section>


                    <PublicityPage url='/anuncio.avif' />
                    <section className='px-8 my-8'>
                        <div className='mb-7'>
                            <Slider
                                path='/movie/popular'
                                titulo='Lo más popular'
                                isMovie='/movie'
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
                                isMovie='/movie'
                            />
                        </div>
                    </section>
                    {/* Anuncio 2 */}
                    <PublicityPage
                        url={
                            "https://art-gallery-latam.api.hbo.com/images/fzElsTTwA7Knig15UGwmN$$$LFEFOOTER$$$latam/background?v=f30a3f85c906dc49eb62955118d74cdb&format=png&size=400x400&compression=low&protection=false&scaleDownToFit=false&language=es-419"
                        }
                        btn='Cátegoria'
                        tittle='"¡Descubre el cine en casa con nosotros!"'
                    />
                    <section className='px-8 mt-8'>
                        <div className='mb-7'>
                            <Slider
                                path='/tv/top_rated'
                                titulo='Noche de pelis todos los días'
                                isMovie='/serie'
                            />
                        </div>
                        <div className='pb-7'>
                            <Slider
                                path='/movie/top_rated'
                                titulo='Colecciones icónicas'
                                subtitulo={
                                    "Historias inolvidables que nos robaron el corazón."
                                }
                                isMovie='/movie'
                            />
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default HomePage;

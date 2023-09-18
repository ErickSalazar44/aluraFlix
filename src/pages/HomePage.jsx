import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import MovieSlider from "../components/Home/MovieSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../store/slices/genresSlice";
import PublicityPage from "../components/Home/PublicityPage";
import Slider from "../components/Slider";
import Button from "../components/Button";
import PublicityPage2 from "../components/Home/PublicityPage2";
import LoadingHome from "../components/Loading/HomeMovie/LoadingHome";
import { setHomeValue } from "../store/slices/homeMovieSlice";

const HomePage = () => {
    // Series mas populares
    const baseUrl = "https://api.themoviedb.org/3";
    const path = "/trending/tv/week"; // puedes modificar este path para mostrar otras peliculas

    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genresMovies); // traer los generos del estado global

    const [popularMovies, getMovies, isError, loading] = useFetch(baseUrl);

    useEffect(() => {
        // obtener los datos de la api
        getMovies(path);
    }, []);

    useEffect(() => {
        // almacenar la palicula y los generos en estado global
        if (!genres.length) {
            dispatch(fetchGenres("tv"));
        }
        dispatch(setHomeValue(popularMovies))
    }, [genres, popularMovies]);

    if (loading) {
        return (
            <LoadingHome/>
        );
    }

    return (
        <div>
            {isError && <p>Hubo un error al cargar las peliculas</p>}
            {!loading && !isError && (
                <main>
                    {/* HOME HEADER  */}
                    <MovieSlider
                        movies={popularMovies?.results}
                        genres={genres}
                    />

                    {/* ANUNCIO */}
                    <section className='px-8 md:px-10 lg:px-12 2xl:px-16 mt-8 text-white sm:text-center md:flex md:text-left md:gap-8 md:items-center md:flex-row-reverse md:justify-center xl:gap-20'>
                        <div className='mb-4 lg:mb-0'>
                            <h4 className='font-semibold text-lg lg:text-xl xl:text-3xl xl:mb-2'>
                                Episodios Gratuitos
                            </h4>
                            <p className='opacity-80 text-xs md:mb-4 lg:text-base xl:text-lg lg:mb-8'>
                                ¡Descubre la emoción en los estrenos de
                                películas y series icónicas!
                            </p>
                            <div className='hidden md:block'>
                                <Button text='VER AHORA' noNavigate={false} />
                            </div>
                        </div>
                        <PublicityPage url='/anuncio.avif' />
                    </section>

                    {/* Body Slider Movie 1 */}
                    <section className='px-8 md:px-10 lg:px-12 2xl:px-16 my-8'>
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
                    <div className='sm:hidden'>
                        <PublicityPage
                            url={
                                "https://art-gallery-latam.api.hbo.com/images/fzElsTTwA7Knig15UGwmN$$$LFEFOOTER$$$latam/background?v=f30a3f85c906dc49eb62955118d74cdb&format=png&size=400x400&compression=low&protection=false&scaleDownToFit=false&language=es-419"
                            }
                            btn='Cátegoria'
                            tittle='¡Descubre el cine en casa con nosotros!'
                        />
                    </div>
                    <div className='hidden sm:block'>
                        <PublicityPage2
                            url={
                                "https://i.blogs.es/8cb1c2/mejores-peliculas-accion-2021/1366_2000.jpeg"
                            }
                            btn='Cátegoria'
                            tittle='¡Descubre el cine en casa con nosotros!'
                        />
                    </div>

                    {/* Body Slider Movie 2 */}
                    <section className='px-8 md:px-10 lg:px-12 2xl:px-16 mt-8'>
                        <div className='mb-7'>
                            <Slider
                                path='/tv/top_rated'
                                titulo='Noche de pelis todos los días'
                                isMovie='/tv'
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
                </main>
            )}
        </div>
    );
};

export default HomePage;

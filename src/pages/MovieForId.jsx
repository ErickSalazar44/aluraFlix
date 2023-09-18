import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import MovieTrailer from "../components/Movie/MovieTrailer";
import useProviders from "../hooks/useProviders";
import Providers from "../components/Movie/Providers";
import HeaderMovie from "../components/Movie/HeaderMovie";
import Button from "../components/Button";
import useCredits from "../hooks/useCredits";
import Elenco from "../components/Movie/Elenco";
import useSimilar from "../hooks/useSimilar";
import Recomendaciones from "../components/Movie/Recomendaciones";
import BodyMovieForId from "../components/Movie/BodyMovieForId";
import Categorias from "../components/Movie/Categorias";
import LoadingMovie from "../components/Loading/MovieForId/LoadingMovie";
import { useSelector } from "react-redux";

const MovieForId = ({ path }) => {
    const { id } = useParams();

    const baseUrl = "https://api.themoviedb.org/3";

    const query = "append_to_response=videos";

    const [movie, getMovie, , loading] = useFetch(baseUrl);

    const [providers, getProviders, , loadingProviders] = useProviders(path);

    const [elenco, getElenco, isErrorElenco, loadingCredits] = useCredits(path);

    const [similares, getSimilares, , loadingSimilarMovie] = useSimilar(path);


    const movieGlobal = useSelector((state) => state.homeMovieSlice)

    useEffect(() => {
        getMovie(`${path}/${id}`, query);
    }, [path, id]);

    useEffect(() => {
        getProviders(id);
        getElenco(id);
        getSimilares(id);
    }, [path, id]);

    // Si la pagina ya fue cargada mostrar los datos que tenemos en el estado global
    const desplegarInfo = () => {
        if (movieGlobal.length === 0) {
            return movie
        }

        const selectMovie =  movieGlobal.results.find(movie => movie.id == id)
        return selectMovie ? selectMovie : movie
    }
    
    const idGlobal = () => {
        if (movieGlobal.length === 0) {
            return false
        }
        const selectMovie =  movieGlobal.results.find(movie => movie.id == id)
        return selectMovie ? true : false
    }

    // Desplegar trailer
    const [playing, setPlaying] = useState(false);

    if (!idGlobal() && (!movie || loading || loadingProviders || loadingCredits || loadingSimilarMovie ) ) {
        return <LoadingMovie />;
    }

    return (
        <main className='text-white'>
            {/* header */}
            <HeaderMovie movie={movie} setPlaying={setPlaying} desplegarInfo={desplegarInfo}/>

            {/* BODY */}
            <BodyMovieForId movie={movie} path={path} desplegarInfo={desplegarInfo}/>

            {/* Categorias */}
            <Categorias movie={movie} />

            {/* Homepage */}
            {movie?.homepage.length > 0 && (
                <div className='px-6 md:px-10 lg:px-12 2xl:px-16 mt-8 flex items-center gap-16 max-w-[1400px] mx-auto'>
                    <a href={movie?.homepage} className='block w-[180px]'>
                        <Button text='Home Page' noNavigate={true} />
                    </a>
                </div>
            )}

            {/* Reparto */}
            {elenco && !isErrorElenco && (
                <div className='px-6 md:px-10 lg:px-12 2xl:px-16 mt-8 relative z-30 max-w-[1400px] mx-auto'>
                    <Elenco elenco={elenco} />
                </div>
            )}

            {/* Provedores */}
            {providers?.results && <Providers providers={providers} />}

            {/* SECCION TRAILER */}
            {playing && (
                <div
                    className={`fixed top-0 z-40 grid place-items-center w-full  min-h-full transition-all duration-500 `}
                >
                    <div
                        onClick={() => setPlaying(false)}
                        className={`fixed w-full min-h-full bg-black z-50 opacity-90 transition-all duration-500`}
                    ></div>
                    {movie.videos.results.length >= 1 ? (
                        movie?.videos?.results &&
                        movie.videos.results.length > 0 && (
                            <MovieTrailer
                                videoUrl={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                                playing={playing}
                                setPlaying={setPlaying}
                            />
                        )
                    ) : (
                        <h4 className='z-50'>
                            VIDEO NO DISPONIBLE LO SENTIMOS{" "}
                        </h4>
                    )}
                </div>
            )}

            {/* Recomendacion  */}
            <div className='px-6 md:px-10 lg:px-12 2xl:px-16 mt-8 overflow-hidden'>
                <Recomendaciones similares={similares} isMovie={path} />
            </div>
        </main>
    );
};

export default MovieForId;

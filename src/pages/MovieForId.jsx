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



const MovieForId = ({ path }) => {


    const { id } = useParams();

    const baseUrl = "https://api.themoviedb.org/3";

    const query = "append_to_response=videos";

    const [movie, getMovie, isError, loading] = useFetch(baseUrl);

    const [providers, getProviders] = useProviders(path);

    const [elenco, getElenco, isErrorElenco] = useCredits(path);

    const [similares, getSimilares, isErrorSimilar ] = useSimilar(path)


    useEffect(() => {
        getMovie(`${path}/${id}`, query);
    }, [path, id]);

    useEffect(() => {
        getProviders(id);
        getElenco(id)
        getSimilares(id)
    }, [path, id]);




    // HORAS Y MINUTOS DE PELICULA 
    const handleTimeMovie = (tiempo) => {
        const horas = Math.floor(tiempo / 60);
        const minutos = tiempo % 60
        
        return {horas, minutos}
    }

    // Desplegar trailer 

    const [playing, setPlaying] = useState(false)

    return (
        <article className='text-white'>
            {/* header */}
            <HeaderMovie movie={movie} setPlaying={setPlaying}/>

            {/* BODY */}
            <div className='px-6 md:px-10 lg:px-12 2xl:px-16 mb-8'>
                <div className='w-full py-5'>
                    <h2 className='font-semibold text-titulo'>
                        {path === '/movie'
                            ? movie?.title
                            : movie?.original_name}
                    </h2>
                    <div className=" mt-2 text-xs opacity-80 font-light flex gap-4 md:text-sm">
                        {
                            movie?.runtime 
                            ? <span className="block ">{`${handleTimeMovie(movie?.runtime).horas} H ${handleTimeMovie(movie?.runtime).minutos} MIN`}</span>
                            : (
                                <>
                                    <span className="block">{movie?.number_of_episodes} Episodios</span> 
                                    <span className="block">{movie?.number_of_seasons} Temporadas</span>
                                </>
                                )
                        }
                        <span className='block'>{`${
                                    path === '/movie'
                                        ? movie?.release_date.slice(0,4)
                                        : movie?.last_air_date.slice(0,4)
                                }`}
                        </span>
                        <span>HD</span>
                    </div>
                </div>

                <div className="opacity-80 ">
                    <h3 className='text-[16px] font-semibold mb-2'>
                        {movie?.tagline ? movie?.tagline : 'Synopsis'}
                    </h3>
                    <p className='text-sm md:text-base lg:max-w-[900px]'>{movie?.overview}</p>
                </div>
            </div>
            {/* Categorias */}

            <div className="px-6 md:px-10 lg:px-12 2xl:px-16 mt-8">
                <ul className="flex gap-4 opacity-80 flex-wrap">
                    {
                        movie?.genres.map(genre => (
                            <li className="border px-3 py-2 md:px-8 rounded-2xl" key={genre.id}>{genre.name}</li>
                        ))
                    }
                </ul>
            </div>

            {/* Homepage */}
            {
                movie?.homepage.length > 0 
                ? 
                <div className="px-6 md:px-10 lg:px-12 2xl:px-16 mt-8 flex items-center gap-16">
                    <a href={movie?.homepage} className="block w-[180px]">
                        <Button text='Home Page'/>
                    </a>
                </div>
                : <></>
            }
            

            {/* Reparto */}
                {
                    (elenco && !isErrorElenco) &&
                    <div className="px-6 md:px-10 lg:px-12 2xl:px-16 mt-8">
                        <Elenco elenco={elenco}/>
                    </div>
                }

                
            {/* Provedores */}
                { providers?.results && <Providers providers={providers}/> }



            {/* SECCION TRAILER */}
            
            {
                (playing) 
                &&
                <div className={`fixed top-0 z-40 grid place-items-center w-full min-h-full transition-all duration-500 `}>
                    <div onClick={() => setPlaying(false) } className={`fixed w-full min-h-full bg-black z-50 opacity-90  transition-all duration-500`}></div>
                    {
                        (movie.videos.results.length >= 1)
                        ?
                        movie?.videos?.results &&
                            movie.videos.results.length > 0 && (
                                <MovieTrailer
                                    videoUrl={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                                    playing={playing}
                                    setPlaying={setPlaying}
                                />
                            )
                        :
                            
                            <h4 className="z-50">VIDEO NO DISPONIBLE LO SENTIMOS </h4>
                    }
                </div>
            }

            {/* Recomendacion  */}

            <div className="px-6 md:px-10 lg:px-12 2xl:px-16 mt-8">
                <Recomendaciones similares={similares} isMovie={path}/>
            </div>

        </article>
    );
};

export default MovieForId;

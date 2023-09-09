import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import MovieTrailer from "../components/Movie/MovieTrailer";
import useProviders from "../hooks/useProviders";
import Providers from "../components/Movie/Providers";

import HeaderMovie from "../components/Movie/HeaderMovie";
import Button from "../components/Button";
import useCredits from "../hooks/useCredits";
import Elenco from "../components/Movie/Elenco";




const MovieForId = ({ isMovie }) => {
    const { id } = useParams();

    const baseUrl = "https://api.themoviedb.org/3";

    const path = isMovie ? "/movie" : "/tv";

    const query = "append_to_response=videos";

    const [movie, getMovie, isError, loading] = useFetch(baseUrl);

    const [providers, getProviders] = useProviders();

    const [elenco, getElenco, isErrorElenco] = useCredits();

    useEffect(() => {
        getMovie(`${path}/${id}`, query);
    }, []);

    useEffect(() => {
        getProviders(id);
        getElenco(id)
    }, []);


    console.log(providers)


    // HORAS Y MINUTOS DE PELICULA 


    const handleTimeMovie = (tiempo) => {
        const horas = Math.floor(tiempo / 60);
        const minutos = tiempo % 60
        
        return {horas, minutos}
    }

    return (
        <article className='text-white'>
            {/* header */}
            <HeaderMovie movie={movie}/>

            {/* BODY */}
            <div className='px-6'>
                <div className='w-full py-5'>
                    <h2 className='font-semibold text-titulo'>
                        {isMovie
                            ? movie?.title
                            : movie?.original_name}
                    </h2>
                    <div className=" mt-2 text-xs opacity-80 font-light flex gap-4">
                        {
                            movie?.runtime 
                            ? <span className="block">{`${handleTimeMovie(movie?.runtime).horas} H ${handleTimeMovie(movie?.runtime).minutos} MIN`}</span>
                            : (
                                <>
                                    <span className="block">{movie?.number_of_episodes} Episodios</span> 
                                    <span className="block">{movie?.number_of_seasons} Temporadas</span>
                                </>
                                )
                        }
                        <span className='block'>{`${
                                    isMovie
                                        ? movie?.release_date.slice(0,4)
                                        : movie?.last_air_date.slice(0,4)
                                }`}
                        </span>
                        <span>HD</span>
                    </div>
                </div>

                <div className="opacity-80 ">
                    {/* <h3 className='text-[16px] font-semibold mb-2'>
                        Synopsis
                    </h3> */}
                    <p className='text-sm '>{movie?.overview}</p>
                </div>
            </div>

            {/* Categorias */}

            <div className="px-6 mt-8">
                <ul className="flex gap-4 opacity-80 flex-wrap">
                    {
                        movie?.genres.map(genre => (
                            <li className="border px-3 py-2 rounded-2xl" key={genre.id}>{genre.name}</li>
                        ))
                    }
                </ul>
            </div>

            {/* Homepage Provedores  */}
            {
                movie?.homepage.length > 0 
                ? 
                <div className="px-6 mt-8 flex flex-col gap-4">
                    <a href={movie?.homepage} className="block w-[180px]">
                        <Button text='Home Page'/>
                    </a>

                </div>
                : <></>
            }

            {/* Reparto */}
                {
                    (elenco && !isErrorElenco) &&
                    <div className="px-6 mt-8">
                        <Elenco elenco={elenco}/>
                    </div>
                }

                
            {/* Provedores */}
                { providers?.results && <Providers providers={providers}/> }



            {/* SECCION TRAILER */}
            {/* <div>
                {movie?.videos?.results &&
                    movie.videos.results.length > 0 && (
                        <MovieTrailer
                            videoUrl={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                        />
                    )}
            </div> */}
        </article>
    );
};

export default MovieForId;

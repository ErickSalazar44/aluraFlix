import React from "react";

const BodyMovieForId = ({ movie, path, desplegarInfo }) => {
    
    // HORAS Y MINUTOS DE PELICULA
    const handleTimeMovie = (tiempo) => {
        const horas = Math.floor(tiempo / 60);
        const minutos = tiempo % 60;
        return { horas, minutos };
    };

    return (
        <article className='px-6 md:px-10 lg:px-12 2xl:px-16 mb-8 relative z-30 max-w-[1400px] mx-auto'>
            <header className='w-full py-5'>
                <h2 className='font-semibold text-titulo md:text-5xl md:mb-6 full-title'>
                    {path === "/movie" ? movie?.title : desplegarInfo()?.original_name}
                </h2>
                <div className=' mt-2 text-xs opacity-100 font-light flex gap-4 md:text-sm'>
                    {movie?.runtime ? (
                        <span className='block '>{`${
                            handleTimeMovie(movie?.runtime).horas
                        } H ${
                            handleTimeMovie(movie?.runtime).minutos
                        } MIN`}</span>
                    ) : (
                        <>
                            <span className='block'>
                                {movie?.number_of_episodes} Episodios
                            </span>
                            <span className='block'>
                                {movie?.number_of_seasons} Temporadas
                            </span>
                        </>
                    )}
                    <span className='block'>
                        {`${
                            path === "/movie"
                                ? movie?.release_date.slice(0, 4)
                                : movie?.last_air_date.slice(0, 4)
                        }`}
                    </span>
                    <span>HD</span>
                </div>
            </header>

            <footer className='opacity-80 '>
                <h3 className='text-sm sm:text-base font-semibold mb-2'>
                    {movie?.tagline ? movie?.tagline : "Synopsis"}
                </h3>
                <p className='text-xs sm:text-sm md:text-base lg:max-w-7xl'>
                    {desplegarInfo()?.overview}
                </p>
            </footer>
        </article>
    );
};

export default BodyMovieForId;

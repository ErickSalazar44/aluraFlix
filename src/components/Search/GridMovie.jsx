const GridMovie = ({moviesToUse, handleNavigate}) => {
    return (
        <section className='grid gap-4 md:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8'>
            {moviesToUse?.results?.map((movie) => (
                <article
                    className="cursor-pointer  transition duration-300 filter saturate-[0.9] hover:saturate-[1.1] border-transparent border-4 hover:border-cyan-600"
                    key={movie.id}
                >
                    <img
                        src={movie?.poster_path ? `https://image.tmdb.org/t/p/w780${movie.poster_path}` : '/noImage.avif'}
                        alt={movie?.name}
                        className='rounded w-full aspect-[9/12]'
                        onError={(e) => {
                            e.target.onError = null;
                            e.target.src = '/noImage.avif'
                            e.target.style.pointerEvents = "none";
                        }}
                        onClick={(e) => {
                            if (e.target.src.endsWith('/noImage.avif')) {
                                return;
                            }
                            handleNavigate(movie.id);
                        }}
                    />
                </article>
            ))}
        </section>
    );
};

export default GridMovie;

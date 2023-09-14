const GridMovie = ({moviesToUse, handleNavigate}) => {
    return (
        <div className='grid gap-4 md:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8'>
            {moviesToUse?.results?.map((movie) => (
                <div
                    className="cursor-pointer  transition duration-300 filter saturate-[0.9] hover:saturate-[1.1] border-transparent border-2 hover:border-cyan-600"
                    key={movie.id}
                    onClick={() => handleNavigate(movie.id)}
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                        alt={movie.name}
                        className='rounded w-full'
                    />
                </div>
            ))}
        </div>
    );
};

export default GridMovie;

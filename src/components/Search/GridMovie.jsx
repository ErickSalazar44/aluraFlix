const GridMovie = ({moviesToUse, handleNavigate}) => {
    const styleGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gridGap: "16px",
    };

    return (
        <div className='grid' style={styleGrid}>
            {moviesToUse?.results?.map((movie) => (
                <div
                    className="cursor-pointer  transition duration-300 filter saturate-[0.9] hover:saturate-[1.1] border-transparent border-2 hover:border-cyan-600"
                    key={movie.id}
                    onClick={() => handleNavigate(movie.id)}
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                        alt={movie.name}
                        className='rounded'
                    />
                </div>
            ))}
        </div>
    );
};

export default GridMovie;

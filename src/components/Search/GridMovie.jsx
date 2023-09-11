const GridMovie = ({moviesToUse, handleNavigate}) => {
    const styleGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(174px, 1fr))",
        gridGap: "16px",
    };

    return (
        <div className='grid' style={styleGrid}>
            {moviesToUse?.results.map((movie) => (
                <div
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

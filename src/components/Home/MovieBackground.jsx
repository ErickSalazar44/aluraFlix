import { CiPlay1 } from "react-icons/ci";

const MovieBackground = ({ movies, genreNamesByIds, currentIndex }) => {
    return (
        <>
            <section
                className={`flex flex-col relative pt-[80px] after:content-[''] after:absolute after:inset-0 after:z-[1] after:bg-gradient after:h-[85vh]`}
            >
                <img
                    src={`https://image.tmdb.org/t/p/w780${movies?.[currentIndex]?.poster_path}`}
                    alt={movies?.[currentIndex]?.title}
                    className='absolute z-[1] top-0 w-[90%] right-0 h-[85vh] object-cover saturate-[1.2]'
                />

                <div className='px-6 pb-8 z-10'>
                    <div
                        className={`flex flex-col gap-3 justify-end min-h-homeSpaceFondo`}
                    >
                        <h2 className='text-white text-[1.875rem] font-semibold'>
                            {movies?.[currentIndex]?.original_name}
                        </h2>
                        <ul className='flex gap-4 text-white'>
                            {genreNamesByIds?.slice(0, 3).map((genre) => (
                                <li key={genre}>{genre}</li>
                            ))}
                        </ul>
                        <span className='mt-6'>
                            <CiPlay1 color='white' size={33} />
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MovieBackground;

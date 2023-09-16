const Categorias = ({movie}) => {
    return (
        <div className='px-6 md:px-10 lg:px-12 2xl:px-16 mt-8 max-w-[1400px] mx-auto '>
            <ul className='flex gap-4 opacity-80 flex-wrap'>
                {movie?.genres.map((genre) => (
                    <li
                        className='border px-3 py-2 md:px-8 rounded-2xl xl:text-lg'
                        key={genre.id}
                    >
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categorias;

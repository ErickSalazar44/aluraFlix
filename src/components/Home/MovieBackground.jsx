import { useEffect, useRef, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { viewNavigate } from "../../utils/animationNavigate";
import { flushSync } from "react-dom";

const MovieBackground = ({
    movies,
    genreNamesByIds,
    currentIndex,
    navigate,
}) => {
    const [backgroundImage, setBackgroundImage] = useState(
        `https://image.tmdb.org/t/p/w780${movies?.[currentIndex]?.poster_path}`
    );
    const title = useRef(null);
    useEffect(() => {
        if (movies) {
            const handleResize = () => {
                if (window.innerWidth >= 1024) {
                    setBackgroundImage(
                        `https://image.tmdb.org/t/p/original${movies?.[currentIndex]?.backdrop_path}`
                    );
                } else {
                    setBackgroundImage(
                        `https://image.tmdb.org/t/p/w780${movies?.[currentIndex]?.poster_path}`
                    );
                }
            };

            window.addEventListener("resize", handleResize);
            handleResize();

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, [movies, currentIndex]);

    return (
        <>
            <section
                className={`flex flex-col relative pt-[80px] after:content-[''] after:absolute after:inset-0 after:z-[1] after:bg-gradient after:h-[85vh]`}
            >
                <div className='w-full top-0 right-0 h-[85vh] absolute z-[1]'>
                    <img
                        src={
                            movies?.[currentIndex].poster_path
                                ? backgroundImage
                                : "/noImage.avif"
                        }
                        alt={movies?.[currentIndex].original_name}
                        className='absolute z-[1] top-0 w-[100vw] right-0 h-[85vh] object-cover saturate-[1.2]'
                        onLoad={(e) => {
                            e.target.style.opacity = 1;
                        }}
                        style={{ opacity: 0, transition: "opacity 0.5s" }}
                    />
                </div>

                <div className='px-8 md:px-10 lg:px-12 2xl:px-16 pb-8 z-10'>
                    <div
                        className={`flex flex-col gap-3 justify-end min-h-homeSpaceFondo lg:min-h-homeSpaceFondoPC`}
                    >
                        <h2
                            ref={title}
                            className='text-white text-[1.875rem] font-semibold lg:text-[40px]'
                        >
                            {movies?.[currentIndex]?.original_name}
                        </h2>
                        <ul className='flex text-xs movieId:text-sm gap-4 text-white lg:text-lg lg:gap-6'>
                            {genreNamesByIds?.slice(0, 3).map((genre) => (
                                <li key={genre}>{genre}</li>
                            ))}
                        </ul>
                        <span
                            className='mt-6 w-[40px]'
                            onClick={() => {
                                title.current.classList.add("full-title");
                                document.startViewTransition(async () => {
                                    title.current.style.viewTransitionName = "";
                                    flushSync(() =>
                                        navigate(
                                            `/tv/${movies?.[currentIndex].id}`
                                        )
                                    );
                                });
                            }}
                        >
                            <CiPlay1
                                color='white'
                                className='w-[36px] h-[36px] lg:w-[40px] lg:h-[40px] cursor-pointer'
                            />
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MovieBackground;

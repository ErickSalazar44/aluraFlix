import { useRef } from "react";
import ReactPlayer from "react-player";

const MovieTrailer = ({ videoUrl, setPlaying, playing }) => {

    const playerRef = useRef(null)

    const closeVideo = () => {
        setPlaying(false)
    }

    return (
        <div  className={`player-wrapper aspect-video max-w-3xl sm:max-w-4xl xl:max-w-6xl z-50 w-full  transition-all duration-500  ${playing ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>

                <ReactPlayer
                    ref={playerRef}
                    url={videoUrl} 
                    controls={true} 
                    width='100%' 
                    height='100%'
                    playing={playing}
                    onEnded={closeVideo}
                />

        </div>
    );
};

export default MovieTrailer;

import ReactPlayer from "react-player";

const MovieTrailer = ({ videoUrl }) => {
    return (
        <div className='player-wrapper h-[400px]'>
            <ReactPlayer
                url={videoUrl} // La URL del video de YouTube
                controls={true} // Muestra controles de reproducción
                width='100%' // Ancho del reproductor
            />
        </div>
    );
};

export default MovieTrailer;

import SliderMovie from "../SliderMovie"


const Recomendaciones = ({similares, isMovie, navigateMovie}) => {
    
    return (
        <div>
            <h2 className="font-base mb-3 opacity-80 text-lg">Más contenido como este</h2>
            <SliderMovie movies={similares} isMovie={isMovie} navigateMovie={navigateMovie}/>
        </div>
    )
}

export default Recomendaciones
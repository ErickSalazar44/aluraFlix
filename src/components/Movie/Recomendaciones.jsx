import SliderMovie from "../SliderMovie"


const Recomendaciones = ({similares, isMovie}) => {
    if (similares?.results.length === 0) {
        return <></>
    }
    
    return (
        <div>
            <h2 className="font-base mb-3 opacity-80 text-lg">Más contenido como este</h2>
            <SliderMovie movies={similares} isMovie={isMovie} />
        </div>
    )
}

export default Recomendaciones
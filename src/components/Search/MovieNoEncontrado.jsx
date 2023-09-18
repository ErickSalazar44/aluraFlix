import React from "react";

const MovieNoEncontrado = () => {
    return (
        <article className='text-white w-full '>
            <header className='grid place-items-center text-center'>
                <img className='w-52 sm:w-60 md:w-72 lg:w-96' src='/conejo.png' alt='404' />
                <h3>
                    Lo sentimos, no se han encontrado resultados. Comprueba que
                    lo escribiste bien o realiza otra búsqueda diferente.
                </h3>
            </header>
        </article>
    );
};

export default MovieNoEncontrado;

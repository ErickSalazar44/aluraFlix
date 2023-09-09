const Providers = ({ providers }) => {
    // esto se debe a que si el producto no esta en venta
    // la api envia un obj vacio

    if (
        Object.keys(providers?.results).length === 0 ||
        !providers?.results.US
    ) {
        return <></>;
    }

    if (providers?.results.US.buy) {


        return (
            <div className='flex items-center gap-4 px-6 mt-8'>
                <h3 className='font-semibold'>Plataformas disponibles </h3>
                <div className='rounded-2xl flex gap-4'>
                    {providers.results.US.buy.slice(0, 2).map((provedor) => (
                        <img
                            key={provedor.provider_id}
                            className='rounded-2xl w-16'
                            src={`https://image.tmdb.org/t/p/w500/${provedor.logo_path}`}
                            alt={`${provedor.provider_name}`}
                        />
                    ))}
                </div>
            </div>
        );
    }
};

export default Providers;

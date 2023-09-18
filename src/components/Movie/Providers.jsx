// recibe un obj con los paises disponibles y retornamos el primero que coincida
const obtenerProveedorDisponible = (disponibles) => {
    const paisesAEleccion = ["PE", "CL", "MX", "ES", "US"];
    for (const pais of paisesAEleccion) {
        if (disponibles.hasOwnProperty(pais)) {
            return disponibles[pais];
        }
    }
    return null;
};

const renderProveedores = (proveedores) => {
    return (
        <div className='rounded-2xl flex flex-wrap gap-4'>
            {proveedores?.slice(0, 10).map((proveedor) => (
                <img
                    key={proveedor.provider_id}
                    className='rounded-2xl w-16'
                    src={proveedor?.logo_path ? `https://image.tmdb.org/t/p/w500/${proveedor.logo_path}` : '/noImage.avif'}
                    alt={`${proveedor.provider_name}`}
                />
            ))}
        </div>
    );
};

const Providers = ({ providers }) => {
    // en el caso de que no este disponible la api regresa un obj vacio
    if (Object.keys(providers?.results).length === 0) {
        return <></>;
    }

    // validacion
    const proveedorDisponible = obtenerProveedorDisponible(providers.results);

    return (
        proveedorDisponible && (
            <div className='flex flex-wrap items-center gap-4 px-6 md:px-10 lg:px-12 2xl:px-16 mt-8 max-w-[1400px] mx-auto'>
                <h3 className='font-semibold'>Plataformas disponibles </h3>
                {proveedorDisponible?.buy
                    ? renderProveedores(proveedorDisponible.buy)
                    : renderProveedores(proveedorDisponible?.flatrate)}
            </div>
        )
    );
};

export default Providers;

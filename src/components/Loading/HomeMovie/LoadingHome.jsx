import { DotWave } from "@uiball/loaders";

const LoadingHome = () => {
    return (
        <div className='w-full relative grid place-content-center min-h-screen'>
            <DotWave size={47} speed={1} color='#888' />
        </div>
    );
};

export default LoadingHome;

const LoadingSearch = () => {
    return (
        <div className='w-full relative flex flex-col min-h-screen px-8 md:px-10 lg:px-12 2xl:px-16 pt-[80px]'>
            <div className='animate-pulse bg-[#111] rounded md:mt-6 w-full h-[68px]'></div>
            <div className='my-6 flex justify-between animate-pulse'>
                <div className='h-[30px] md:h-[33px] bg-[#111] w-32 rounded'></div>
                <div className='h-[30px] md:h-[33px] bg-[#111] w-32 rounded'></div>
                <div className='h-[30px] md:h-[33px] bg-[#111] w-32 rounded'></div>
                <div className='h-[30px] md:h-[33px] bg-[#111] w-32 rounded hidden sm:block sm:w-36'></div>
                <div className='h-[30px] md:h-[33px] bg-[#111] w-32 rounded hidden md:block md:w-36'></div>
                <div className='h-[30px] md:h-[33px] bg-[#111] w-32 rounded hidden lg:block lg:w-36'></div>
                <div className='h-[30px] md:h-[33px] bg-[#111] w-32 rounded hidden lg:block lg:w-36'></div>
                <div className='h-[30px] md:h-[33px] bg-[#111] w-32 rounded hidden xl:block xl:w-36'></div>
                <div className='h-[30px] md:h-[33px] bg-[#111] w-32 rounded hidden xl:block xl:w-36'></div>
                <div className='h-[30px] md:h-[33px] bg-[#111] w-32 rounded hidden 2xl:block 2xl:w-36'></div>
            </div>
            <div className='mt-3 animate-pulse'>
                <div className='mb-6 w-44 h-8 rounded bg-[#111]'></div>
            </div>
            <div className='animate-pulse grid gap-4 md:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8'>
                {Array.from({ length: 20 }).map((_, index) => (
                    <div
                        key={index}
                        className='rounded w-full aspect-[9/12] bg-[#111]'
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default LoadingSearch;

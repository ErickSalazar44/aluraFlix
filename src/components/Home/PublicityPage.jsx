import Button from "../Button";

const PublicityPage = ({url, btn, tittle}) => {
    return (
        <section className='w-full relative sm:mx-auto sm:max-w-lg md:mx-0 md:max-w-sm lg:max-w-xl xl:max-w-2xl'>
            <img
                className='h-100% w-full'
                src={url}
                alt='BannerHarryPotter'
            />
            {
                (btn && tittle) 
                &&
                <div className="absolute bottom-5 flex items-center flex-col justify-center w-full gap-5 text-white">
                    <span className="block text-base font-bold">{tittle}</span>
                    <Button text='Cátegoria'/>
                </div>
            }
        </section>
    );
};

export default PublicityPage;

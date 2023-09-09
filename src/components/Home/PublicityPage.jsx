import Button from "../Button";

const PublicityPage = ({url, btn, tittle}) => {
    return (
        <section className='w-full relative'>
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

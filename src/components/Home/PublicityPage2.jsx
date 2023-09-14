import Button from "../Button";

const PublicityPage2 = ({url, btn, tittle}) => {
    return (
        <section className='w-full relative'>
            <div className="w-full h-full bg-gradiant absolute top-0 right-0 opacity-80"></div>
            <img
                className='w-full'
                src={url}
                alt='Banner'
            />
            {
                (btn && tittle) 
                &&
                <div className="absolute bottom-12 flex items-start left-10 md:left-12 md:bottom-28 xl:left-16 xl:bottom-52 flex-col justify-normal w-auto gap-5 text-white">
                    <span className="block text-base font-bold md:text-2xl lg:text-3xl lg:mb-2 lg:max-w-lg xl:max-w-2xl xl:mb-8 xl:text-4xl">{tittle}</span>
                    <Button text='Cátegoria'/>
                </div>
            }
        </section>
    );
};

export default PublicityPage2;

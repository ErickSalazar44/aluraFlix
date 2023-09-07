const PublicityPage = ({url}) => {
    return (
        <section className='w-full'>
            <img
                className='my-8 h-100% w-full'
                src={url}
                alt='BannerHarryPotter'
            />
        </section>
    );
};

export default PublicityPage;

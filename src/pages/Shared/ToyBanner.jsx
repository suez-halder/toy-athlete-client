import toyBanner from '../../assets/ToyBanner.jpeg'

const ToyBanner = ({children}) => {
    return (
        <div className="hero h-50 md:h-80 rounded-md" style={{ backgroundImage: `url(${toyBanner})` }}
        >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="md:w-full">
                    <h2 className="mb-4 text-2xl md:text-5xl font-bold bg-blue-300 py-3 px-12 md:py-10 md:px-24 rounded-md text-[#545454]">{children}</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default ToyBanner;
import Banner from "../Banner/Banner";
import BestDeals from "../BestDeals/BestDeals";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            {/* <BestDeals></BestDeals> */}
            <Services></Services>
            

        </div>
    );
};

export default Home;
import Banner from "../Banner/Banner";
import BestDeals from "../BestDeals/BestDeals";
import Categories from "../Categories/Categories";
import Collections from "../Collections/Collections";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Gallery></Gallery>
            <Collections></Collections>
            <BestDeals></BestDeals>
            <Services></Services>
            

        </div>
    );
};

export default Home;

import { updateDocumentTitle } from "../../../utils/FunctionTitle";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";



const Home = () => {
    updateDocumentTitle("Toy Athlete | Home Page")
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <Reviews></Reviews>
            <Services></Services>
            

        </div>
    );
};

export default Home;
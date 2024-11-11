
import Banner from "./Banner";
import BestMenu from "./BestMenu";
import Category from "./Category";
import FeaturedMenu from "./FeaturedMenu";
import PopularMenu from "./PopularMenu";
import Reviews from "./Reviews";

const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
           <PopularMenu/>
           <FeaturedMenu/>
           <BestMenu/>
           <Reviews/>
        </div>
    );
};

export default Home;
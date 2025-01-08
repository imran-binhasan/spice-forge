
import Banner from "./Banner";
import BestMenu from "./BestMenu";
import Category from "./Category";
import FeaturedMenu from "./FeaturedMenu";
import PopularMenu from "./PopularMenu";

const Home = () => {
    return (
        <div>
           <Banner/>
           <Category/>
           <PopularMenu/>
           <FeaturedMenu/>
           <BestMenu/>
        </div>
    );
};

export default Home;
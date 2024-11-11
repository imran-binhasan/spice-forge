
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BestMenu from "./BestMenu";
import Category from "./Category";
import FeaturedMenu from "./FeaturedMenu";
import Reviews from "./Reviews";
import CustomMenus from "./CustomMenus";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Spice Forge | Home</title>
            </Helmet>
           <Banner/>
           <Category/>
           <CustomMenus category='popular' title='OUR POPULAR MENU' subTitle='CHECKOUT OUR BEST ITEMS'/>
           <FeaturedMenu/>
           <BestMenu/>
           <Reviews/>
        </div>
    );
};

export default Home;
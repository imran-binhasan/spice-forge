import {Helmet} from "react-helmet-async";
import Cover from "../../components/Cover";
import menuBg from "../../assets/menu/banner3.jpg"
import dessertBg from "../../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../../assets/menu/pizza-bg.jpg"
import saladBg from "../../assets/menu/salad-bg.jpg"
import soupBg from "../../assets/menu/soup-bg.jpg"
import CustomMenus from "../Home/CustomMenus";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Spice Forge | Menu</title>
            </Helmet>
            <Cover img={menuBg} title = 'OUR MENU' subTitle = 'WOULD YOU LIKE TO TRY A DISH?'/>
            <CustomMenus category='offered' title='CURRENT OFFERS' subTitle='CHECKOUT OUR BEST ITEMS'/>
            <Cover img={dessertBg} title = 'DESSERTS' subTitle = 'WOULD YOU LIKE TO TRY A DISH?'/>
            <CustomMenus category='dessert'/>
            <Cover img={pizzaBg} title = 'PIZZA' subTitle = 'WOULD YOU LIKE TO TRY A DISH?'/>
            <CustomMenus category='pizza'/>
            <Cover img={saladBg} title = 'SALADS' subTitle = 'WOULD YOU LIKE TO TRY A DISH?'/>
            <CustomMenus category='salad'/>
            <Cover img={soupBg} title = 'SOUPS' subTitle = 'WOULD YOU LIKE TO TRY A DISH?'/>
            <CustomMenus category='soup'/>
        </div>
    );
};

export default Menu;
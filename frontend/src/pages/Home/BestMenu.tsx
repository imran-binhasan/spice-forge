import SectionTitle from "../../components/SectionTitle";
import menuImg from '../../assets/home/featured.jpg'
const BestMenu = () => {
    return (
        <div className="bg-best-menu pt-12 md:pt-20  bg-fixed text-white">
            <SectionTitle title='FROM OUR MENU' subTitle='CHECK IT OUT'/>
            <div className="flex flex-col md:flex-row justify-between items-center bg-slate-800 bg-opacity-20 gap-10 py-10 px-5">\
                <div className="flex-1">
                    <img src={menuImg} alt="" />
                </div>
                <div className="flex-1 space-y-2">
                    <h4>21 January 2025</h4>
                    <h4>WHERE CAN I HAVE SOME?</h4>
                    <p>Are you craving something special? Our featured menu is here to delight your taste buds with exceptional flavors and unique dishes crafted by our expert chefs. From locally sourced ingredients to mouthwatering recipes, every item is prepared with care and passion. Explore our special menu today and treat yourself to a culinary experience like no other. Don't miss out—it's available for a limited time only!</p>
                    <button className="px-3 py-1.5 border-b-2 border-0 shadow-lg rounded-lg hover:bg-black">READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default BestMenu;
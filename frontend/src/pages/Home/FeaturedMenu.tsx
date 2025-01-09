import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import axios from 'axios'
import MenuCard from "../../components/MenuCard";

const FeaturedMenu = () => {
    const [menus,setMenus] = useState([])
    useEffect(()=>{
        axios.get('/featured-menu.json')
        .then(res => setMenus(res.data))
    },[])
    return (
        <div className="my-10">
            <SectionTitle title="CHEF'S SPECIAL" subTitle='SHOULD TRY'/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {menus?.map((eachMenu) => <MenuCard eachMenu={eachMenu} key={eachMenu._id}/>)}
            </div>
        </div>
    );
};

export default FeaturedMenu;
import { useEffect, useState } from "react"
import SectionTitle from "../../components/SectionTitle";
import MenuItems from "../../components/MenuItems";

const PopularMenu = () => {
const [menu,setMenu] = useState([]);
useEffect(()=>{
    fetch('/menu.json')
    .then(res => res.json())
    .then(data => {
        setMenu(data.filter(each => each.category === 'popular'))
    })
},[]);

  return (
    <section className="my-10">
        <SectionTitle title='OUR POPULAR MENU' subTitle='CHECKOUT OUR BEST ITEMS'/>
        <div className="grid md:grid-cols-2 gap-8">
        {menu.map(Item => <MenuItems key={Item._id} Item={Item}/>)}
        </div>
    </section>
  )
}

export default PopularMenu
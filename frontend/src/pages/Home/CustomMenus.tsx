
import SectionTitle from "../../components/SectionTitle";
import MenuItems from "../../components/MenuItems";
import useMenu from "../../hooks/useMenu";
import { Link } from "react-router-dom";

const CustomMenus = ({category, title, subTitle}) => {
  const [menu] = useMenu();
  const specificMenu = menu.filter(menu => menu.category == category)

  return (
    <section className="my-16">
        <SectionTitle title={title} subTitle={subTitle}/>
        <div className="grid md:grid-cols-2 gap-8">
        {specificMenu.map(Item => <MenuItems key={Item._id} Item={Item}/>)}
        </div>
        <div className="w-1/4 mx-auto my-6">
       <Link to={`/shop/${category}`}>
       <button className="px-3 py-1.5 border-b-2 border-gray-800 border-0 shadow text-center rounded-lg w-full mx-auto">ORDER NOW!</button>
       </Link>
        </div>
    </section>
  )
}

export default CustomMenus
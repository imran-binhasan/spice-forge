import { FaAirbnb, FaCalendar, FaCalendarCheck, FaCartArrowDown, FaHome, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { FaAddressBook, FaMarsAndVenus, FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <div className="w-72 min-h-full bg-orange-400 fixed">
                <ul className="flex flex-col  p-8 space-y-4">
                    <li><NavLink className='flex gap-2' to={'/dashboard/user'}>
                    <FaHome/> USER HOME</NavLink></li>
                    <li><NavLink className='flex gap-2' to={'/dashboard/reservation'}>
                    <FaCalendar/> RESERVATION</NavLink></li>
                    <li><NavLink className='flex gap-2' to={'/dashboard/cart'}>
                    <FaCartArrowDown/> MY CART</NavLink></li>
                    <li><NavLink className='flex gap-2' to={'/dashboard/review'}>
                    <FaCalendarCheck/> ADD REVIEW</NavLink></li>
                    <li><NavLink className='flex gap-2' to={'/dashboard/booking'}><FaAddressBook/> ADD BOOKING</NavLink></li>
                    <div className="border-b-2 border-white my-4"></div>
                    <li><NavLink className='flex gap-2' to={'/'}>
                    <FaHome/> HOME</NavLink></li>
                    <li><NavLink className='flex gap-2' to={'/menu'}><FaMarsAndVenus/> MENU</NavLink></li>
                    <li><NavLink className='flex gap-2' to={'/shop/salad'}><FaShop/> SHOP</NavLink></li>
                    <li><NavLink className='flex gap-2' to={'/contact'}><FaMailBulk/> CONTACT</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 ml-72 bg-zinc-50">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;
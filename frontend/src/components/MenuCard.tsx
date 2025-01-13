import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";


const MenuCard = ({ eachMenu }) => {
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const[,refetch] = useCart()

    const { image, name, recipe, category, price, _id } = eachMenu;
    const handleAddtoCart = (menu) => {
        if (!user) {
            Swal.fire({
                title: "You must login to order !",
                text: "Do you want to login ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                cancelButtonText: "No",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/auth/login', { state: { from: location } })
                }
            });
        }
        const orderData = {
            menuId:_id,
            orderEmail:user.email,
            name,
            image,
            category,
            price,
        }
        axiosSecure.post('/api/carts', orderData)
        .then((res) => {
           if(res.data){
            Swal.fire({
                title: "Added to cart !",
                icon: "success",

            })
           } refetch()
        })
    }

    return (
        <div className='flex flex-col'>
            <div>
                <img src={image} alt={name} className='object-cover w-full' />
            </div>
            <div className='text-center space-y-2  p-3 bg-zinc-100'>
                <h4 className='text-xl font-medium'>{name}</h4>
                <p className='w-11/12 mx-auto line-clamp-2'>{recipe}</p>
                <div>
                    <button
                        onClick={() => handleAddtoCart(eachMenu)}
                        className='border-b-yellow-500 border-2 text-yellow-500 hover:bg-black rounded-lg duration-500 transition-all shadow-lg bg-zinc-200 px-3 py-2'>Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
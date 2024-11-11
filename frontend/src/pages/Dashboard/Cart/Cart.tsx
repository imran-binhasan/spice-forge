import { FaDeleteLeft } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart] = useCart();
    const axiosSecure = useAxiosSecure();
    const handleRemoveFromCart =async (id) => {
        await axiosSecure.delete(`/api/carts/:${id}`)
        .then( res => console.log(res.data))
    }
    return (
        <div className="flex flex-col justify-center items-center border">
           <SectionTitle title='WANNA ADD MORE?' subTitle='MY CART'/>
           <div className="w-4/5 mx-auto border">
            <div className="flex items-center justify-around p-4">
                <h3>TOTAL ORDERS : {cart.length}</h3>
                <h3>TOTAL PRICE :</h3>
                <button>PAY</button>
            </div>
            <table className="w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-100 w-full">
            <tr>
              <th className="py-3 px-2 md:px-4 text-left  font-semibold text-gray-700 ">
                ITEM IMAGE
              </th>
              <th className="py-3 px-2 md:px-4 text-left font-semibold text-gray-700">
                ITEM NAME
              </th>
              <th className="py-3 px-2 md:px-4 text-left font-semibold text-gray-700 ">
                PRICE
              </th>
              <th className="py-3 px-2 md:px-4 text-left font-semibold text-gray-700">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => 
                  <tr key={item._id}
                
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-2 px-2 md:px-4 text-sm text-gray-700 hidden sm:table-cell">
                    <img
                      src={item.image}
                      alt={`${item.name}`}
                      className="w-16 xl:w-28 lg:w-24 h-16 object-cover rounded-md"
                    />
                  </td>
                  
                  <td className="py-2 px-2 md:px-4  text-gray-700">
                   {item.name}
                  </td>
                  <td className="py-2 px-2 md:px-4  text-gray-700">
                    {item.price}
                  </td>
                  <td className="py-2 px-2 space-y-1 ">
                    <button 
                    onClick={() => handleRemoveFromCart(item._id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 w-full sm:w-auto">
                     <FaDeleteLeft/>
                    </button>
                  </td>
                </tr>
            )}
          </tbody>
        </table>
           </div>
        </div>
    );
};

export default Cart;
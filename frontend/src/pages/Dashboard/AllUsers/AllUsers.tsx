import { FaDeleteLeft } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle";
import useUser from "../../../hooks/useUser";
import { FaUser } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [users, refetch] = useUser();
    const handleRemoveUser = (id) => {
         Swal.fire({
                    title: "Are you sure!",
                    text: "User will be removed forever",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonText: "No",
                    confirmButtonText: "Yes, remove!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        axiosSecure.delete(`/api/users/${id}`)
                        .then(res => {
                            if(res.status == 204){
                                 refetch();
                            }
                        })
                    }})
                }

        const handleMakeAdmin = (id) => {
            Swal.fire({
                title: "Are you sure!",
                text: "User will be removed forever",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonText: "No",
                confirmButtonText: "Yes, remove!"
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log('working')
                    axiosSecure.patch(`/api/users/${id}`)
                    .then(res => {
                        if(res.status == 200){
                             refetch();
                             console.log('ok')
                        }
                    })
                }})

        }
    return (
        <div className="flex flex-col justify-center items-center border">
              <SectionTitle title='WANNA ADD MORE?' subTitle='MY CART' />
             <div className="w-4/5 mx-auto border">
                            <div className="flex items-center justify-around p-4">
                                <h3>TOTAL USERS : {users.length} </h3>

                            </div>
                            <table className="w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
                                <thead className="bg-gray-100 w-full">
                                    <tr>
                                        <th className="py-3 px-2 md:px-4 text-left  font-semibold text-gray-700 ">
                                            NAME
                                        </th>
                                        <th className="py-3 px-2 md:px-4 text-left font-semibold text-gray-700">
                                            EMAIL
                                        </th>
                                        <th className="py-3 px-2 md:px-4 text-left font-semibold text-gray-700 ">
                                            ROLE
                                        </th>
                                        <th className="py-3 px-2 md:px-4 text-left font-semibold text-gray-700">
                                            ACTION
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user =>
                                        <tr key={user._id}
            
                                            className="border-t border-gray-200 hover:bg-gray-50"
                                        >
                                            <td className="py-2 px-2 md:px-4 text-sm text-gray-700 hidden sm:table-cell">
                                               {user.name}
                                            </td>
            
                                            <td className="py-2 px-2 md:px-4  text-gray-700">
                                                {user.email}
                                            </td>
                                            <td className="py-2 px-2 md:px-4  text-gray-700">
                                           {user.role == 'admin'?<p>Admin</p>: <button
                                                    onClick={() => handleMakeAdmin(user._id)}
                                                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 w-full sm:w-auto">
                                                    <FaUser />
                                                </button>}
                                            </td>
                                            <td className="py-2 px-2 space-y-1 ">
                                                <button
                                                    onClick={() => handleRemoveUser(user._id)}
                                                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 w-full sm:w-auto">
                                                    <FaDeleteLeft />
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

export default AllUsers;
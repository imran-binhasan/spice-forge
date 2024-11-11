import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const AddItems = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const image_apiKey = import.meta.env.VITE_Image_apiKey;
    const image_hostingAPI = `https://api.imgbb.com/1/upload?key=${image_apiKey}`
    const onSubmit = async (data) => 
        {
        const imageFile = {image:data.image[0]};
        const res = await axiosPublic.post(image_hostingAPI, imageFile, {
            headers:{
                'content-type':'multipart/form-data'}
        })
        const image = res.data.data.image.url;
        console.log(image)
    }
    return (
        <div className="flex flex-col justify-center items-center border">
            <SectionTitle title="ADD NEW ITEM" subTitle="SOMETHING NEW !" />
            <div className="w-4/5 p-10 mx-auto border shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="name">
                            Recipe Name
                        </label>
                        <input type="text" {...register('name')} name="name" placeholder="Type your name here" className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex gap-6 items-center">
                        <div className="mb-4 flex-1">
                            <label htmlFor="options">
                                Category
                            </label>
                            <select defaultValue={null}
                                id="options"
                                name="options"
                                {...register('category')}
                                className="block mt-1 w-full p-2.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            >
                                <option disabled>Select category</option>
                                <option value="salad">Salads</option>
                                <option value="pizza">Pizzas</option>
                                <option value="soup">Soups</option>
                                <option value="dessert">Desserts</option>
                                <option value="drink">Drinks</option>
                            </select>
                        </div>
                        <div className="mb-4 flex-1">
                            <label htmlFor="price">
                                Price
                            </label>
                            <input type="text" {...register('price')} name="price" placeholder="Type your name here" className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="recipe">
                            Recipe Details
                        </label>
                        <textarea {...register('recipe')} name="recipe" placeholder="Type your name here" className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <input className="border p-2 c" type="file" {...register('image')} />
                    </div>
                    <div className="mb-4">
                        <button className="border rounded-lg bg-zinc-100 shadow-md py-2 px-4" type="submit">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
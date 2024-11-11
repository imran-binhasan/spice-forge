

const MenuCard = ({eachMenu}) => {
    const {image, name, recipe, _Id} = eachMenu;
    
    return (
        <div className='flex flex-col'>
            <div>
                <img src={image} alt={name} className='object-cover w-full'/>
            </div>
            <div className='text-center space-y-2  p-3 bg-zinc-100'>
                <h4 className='text-xl font-medium'>{name}</h4>
                <p className='w-11/12 mx-auto line-clamp-2'>{recipe}</p>
                <div>
                    <button className='border-b-yellow-500 border-2 text-yellow-500 hover:bg-black rounded-lg duration-500 transition-all shadow-lg bg-zinc-200 px-3 py-2'>Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
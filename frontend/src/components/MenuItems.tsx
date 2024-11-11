
const MenuItems = ({Item}) => {
    const {name, image, price, recipe} = Item;
    return (
        <div className="flex  space-x-4">
                <img src={image} style={{borderRadius:'0 200px 200px 200px'}} className="w-24 h-20" alt={name} />
            <div className="flex">
                <div className="flex flex-col justify-center">
                    <h3 className="uppercase">{name}</h3>
                    <p>{recipe}</p>
                </div>             
                    <p className="text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItems;
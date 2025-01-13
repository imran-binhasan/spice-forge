export type MenuType = {
  _id: string;
  name: string;
  recipe: string;
  image: string;
  category: string;
  price: number;
};

export type ReviewType = {
  name: string;
  details: string;
  rating: number;
};

export type CartType = {
  menuId: string;
  orderEmail: string;
  name: string;
  image: string;
  category: string;
  price: number;
};

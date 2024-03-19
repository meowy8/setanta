export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export interface FavouritesItemType extends Product {
  removeFromFavourites: (id: number) => void;
}

export interface BasketItemType extends Product {
  removeFromBasket: (id: number) => void;
  updateBasketTotal: (price: number) => void;
}

export interface DeleteFavourite {
  id: Product["id"];
  removeFromFavourites: (id: Product["id"]) => void;
}

export interface DeleteBasketItem {
  id: Product["id"];
  removeFromBasket: (id: Product["id"]) => void;
}

export interface HeartButtonProps {
  liked: boolean;
  removeFromFavourites: () => void;
  addToFavourites: () => void;
}
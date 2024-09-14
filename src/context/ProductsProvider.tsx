import { createContext, ReactElement, useState } from "react";
//in summary
//ALL PRODUCT NEED A TYPE
//ARRAY OF PRODUCTS NEEDS A TYPE
//PRODUCT CONTEXT NEEDS A TYPE
//INITIAL STATE OF CONTEXT NEEDS A TYPE

//15:25

//ALL PRODUCT NEED A TYPE
//type for all products
export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

//ARRAY OF PRODUCTS NEEDS A TYPE
//initial state is an array of products of type ProductType
const initState: ProductType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
];

//PRODUCT CONTEXT NEEDS A TYPE
//useContext also needs a type = it is called products which is an array of type ProductType
export type UseProductsContextType = { products: ProductType[] };

//INITIAL STATE OF CONTEXT NEEDS A TYPE
//define initial context state as an array of useproductscontexttype 
const initContextState: UseProductsContextType = { products: [] };

//CONTEXT BEGINS
//Tell productsContext that it will look like initContextState type, then pass it as an argument
const ProductsContext = createContext<UseProductsContextType>(initContextState);
type ChildrenType = { children?: ReactElement | ReactElement[] };

//products provider context is useState of an array of products, default state is initstate
export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;

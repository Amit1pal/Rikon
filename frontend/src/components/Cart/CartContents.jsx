import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "T-shirt",
      size: "XL",
      color: "Red",
      quantity: 1,
      price: 20,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "T-shirt",
      size: "XXL",
      color: "Yellow",
      quantity: 1,
      price: 50,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 4,
      name: "Shirt",
      size: "M",
      color: "Pink",
      quantity: 1,
      price: 100,
      image: "https://picsum.photos/200?random=4",
    },
    {
      productId: 5,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=5",
    },
    {
      productId: 6,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=6",
    },
    {
      productId: 7,
      name: "Shirt",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=7",
    },
    {
      productId: 8,
      name: "Jeans",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=8",
    },
  ];

  return (
    <div className="">
      {cartProducts.map((product,index) => (
        <div key={product.productId} className="border py-4 flex items-start justify-between border-b px-4">
            <div className="flex items-start">
            <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4 rounded-md" />
            <div className="">
                <h3>{product.name}</h3>
                <p className="text-sm text-gray-500">size: {product.size} | color: {product.color}</p>
                <div className="flex items-center mt-2">
                    <button className="border rounded px-2 py-1 text-xl font-medium">
                       - </button>
                       <span className="mx-4">{product.quantity}</span>
                        <button className="border rounded px-2 py-1 text-xl font-medium"> + </button>
                </div>
            </div>
            </div>
            <div>
                <p>$ {product.price.toLocaleString()}</p>
                <button>
                    <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600"/>
                </button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;

import React from "react";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate, count },
    slug,
  },
}) => {
  const { carts, addCart } = useCartStore();

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/product-detail/${slug}`);
  };

  const handleAddedBtn = (e) => {
    e.stopPropagation();
  };

  const handleAddCartBtn = (e) => {
    e.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };

    addCart(newCart);
  };

  return (
    <div
      onClick={handleRedirect}
      className=" flex flex-col max-w-xl  bg-white border border-black  shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        className="p-8 rounded-t-lg w-40  h-40"
        src={image}
        alt="product image"
      />

      <div className="px-5 pb-5">
        <h5 className="text-sm font-semibold tracking-tight text-gray-900 line-clamp-1  dark:text-white">
          {title}
        </h5>

        <div className="flex items-center mt-auto mb-5 ">
          <Rating rate={rate} />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {count}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          {carts.find((cart) => cart.productId === id) ? (
            <>
              <button
                onClick={handleAddedBtn}
                className="text-white bg-black border-black border  hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Added
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleAddCartBtn}
                className="text-black hover:text-white border border-black bg-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Add cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

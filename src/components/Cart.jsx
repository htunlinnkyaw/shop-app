import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();

  const product = products.find((el) => el.id === productId);

  const cost = product.price * quantity;

  const handleIncreaseBtn = () => {
    increaseQuantity(id);
  };

  const handleDecreaseBtn = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      confirm("Are you sure you want to remove ?") && removeCart(id);
    }
  };

  return (
    <section className="border border-black p-3 mb-2 mt-3 grid grid-cols-6">
      <div className="col-span-1">
        <img src={product.image} className="h-20" alt="" />
      </div>
      <div className="col-span-3">
        <div className="space-y-2 mt-2">
          <p className="font-semibold text-black text-sm">{product.title}</p>
          <p className="text-sm text-gray-400">Price ( $ {product.price} ) </p>
        </div>
      </div>
      <div className="col-span-1">
        <p className="text-start  font-semibold text-sm">Quantity</p>
        <div className="flex gap-2 mt-3 items-center">
          <button
            onClick={handleDecreaseBtn}
            className="bg-black text-white w-8 active:scale-95"
          >
            -
          </button>
          <span className="text-sm">{quantity}</span>
          <button
            onClick={handleIncreaseBtn}
            className="bg-black text-white w-8 active:scale-95"
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <p className="text-xl font-bold mt-5 text-end">$ {cost.toFixed(2)} </p>
      </div>
    </section>
  );
};

export default Cart;

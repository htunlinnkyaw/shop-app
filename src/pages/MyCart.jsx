import React from "react";
import Container from "../components/Container";
import Cart from "../components/Cart";
import Breadcrumb from "../components/Breadcrumb";
import useCartStore from "../store/useCartStore";
import { Link } from "react-router-dom";
import useProductStore from "../store/useProductStore";

const MyCart = () => {
  const { carts } = useCartStore();

  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const cost =
      cv.quantity * products.find((el) => el.id === cv.productId).price;
    return pv + cost;
  }, 0);

  const tax = total * 0.05;

  const netTotal = total + tax;

  return (
    <Container>
      <section className="flex  flex-col h-screen">
        <Breadcrumb currentPage={"My Cart"} />
        <div className="h-[20em] overflow-y-auto">
          {carts.length === 0 && (
            <div className="mx-auto mt-20 w-[250px]">
              <h1 className="text-sm font-semibold text-gray-400">
                There is No Item in the Cart
              </h1>
            </div>
          )}
          {carts.map((el) => (
            <Cart key={el.id} cart={el} />
          ))}
        </div>

        <div
          className={`border-t  border-black mt-auto relative bottom-[8em]  h-1 ${
            carts.length === 0 && "hidden"
          }`}
        >
          <div className="flex gap-8 mt-2 items-end justify-end">
            <div className="">
              <p>Price ($)</p>
              <p className="text-end font-bold">{total.toFixed(2)}</p>
            </div>
            <div className="">
              <p>Tax (10%)</p>
              <p className="text-end font-bold ">{tax.toFixed(2)}</p>
            </div>
            <div className="">
              <p>Net Total ($)</p>
              <p className="text-end text-xl font-bold">
                {netTotal.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="flex  justify-end items-end">
            <button className="border border-black mb-5 mt-2 px-4 py-2">
              Order Now
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default MyCart;

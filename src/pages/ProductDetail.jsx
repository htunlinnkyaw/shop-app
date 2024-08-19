import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";

const ProductDetail = () => {
  const { productSlug } = useParams();

  const { products } = useProductStore();
  const { carts, addCart } = useCartStore();

  const currentProduct = products.find(
    (product) => product.slug == productSlug
  );

  const handleAddCartBtn = () => {
    const newCart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };
    addCart(newCart);
  };

  const handleAddedBtn = () => {
    alert("Item is Already in Cart");
  };

  return (
    <section>
      <Container>
        <Breadcrumb currentPage={"Product Detail"} />
        <div className="grid grid-cols-2 p-10 border mt-5 border-black">
          <div className="col-span-1 mx-auto">
            <img
              src={currentProduct.image}
              className="h-60"
              alt="product-image"
            />
          </div>
          <div className="col-span-1">
            <h1 className=" text-xl font-bold">{currentProduct.title}</h1>
            <p className="bg-gray-300 px-4 py-2 inline-block my-2">
              {currentProduct.category}
            </p>
            <p className="text-sm text-black mb-2">
              {currentProduct.description}
            </p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between items-center mt-5">
              <p>$ {currentProduct.price}</p>
              {carts.find((cart) => cart.productId === currentProduct.id) ? (
                <>
                  <button
                    onClick={handleAddedBtn}
                    className="text-sm active:scale-95 border bg-black text-white border-black px-3 py-2"
                  >
                    Added
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleAddCartBtn}
                    className="text-sm active:scale-95 border border-black px-3 py-2"
                  >
                    Add to Cart
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetail;

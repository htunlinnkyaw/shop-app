import React from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";
import useProductStore from "../store/useProductStore";
import useCateogryStore from "../store/useCategoryStore";

const ProductSection = () => {
  const { products } = useProductStore();

  const { categories } = useCateogryStore();

  const currentCategory = categories.find((el) => el.isActive === true);

  return (
    <Container>
      <section className="grid my-5 grid-cols-1 md:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {products
          .filter(
            (el) =>
              currentCategory.name === "All" ||
              el.category === currentCategory.name
          )
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </Container>
  );
};

export default ProductSection;

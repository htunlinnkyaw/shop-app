import React from "react";
import CategoryButton from "./CategoryButton";
import Container from "./Container";
import useCateogryStore from "../store/useCategoryStore";

const CategorySection = () => {
  const { categories } = useCateogryStore();

  return (
    <Container>
      <section className="mb-5">
        <h1 className="text-gray-300 text-sm my-3">Category List</h1>
        <div className="flex gap-2">
          {categories.map((el) => (
            <CategoryButton key={el.id} categoryName={el} current={false} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default CategorySection;

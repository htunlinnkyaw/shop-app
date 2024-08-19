import React from "react";
import useCateogryStore from "../store/useCategoryStore";

const CategoryButton = ({ categoryName: { id, name, isActive } }) => {
  const { activeCategory } = useCateogryStore();

  const handleClick = () => {
    activeCategory(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`border border-black px-4 py-2 rounded-sm active:scale-95 select-none capitalize ${
        isActive == true && "bg-black text-white"
      }`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;

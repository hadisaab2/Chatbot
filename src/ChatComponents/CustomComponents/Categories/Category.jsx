import React from "react";
import { CategoryContainer, CategoryImage, CategoryTitle } from "./styles";
export default function Category({category,setcategory,loopsteps}) {
  const handlecategory = () => {
    loopsteps(category.trigger)
    setcategory(category.value);
  };
  return (
    <CategoryContainer onClick={handlecategory}>
      <CategoryImage src={category.img} />
      <CategoryTitle>{category.value}</CategoryTitle>
    </CategoryContainer>
  );
}

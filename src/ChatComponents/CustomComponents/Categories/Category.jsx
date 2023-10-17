import React from "react";
import { CategoryContainer, CategoryImage, CategoryTitle } from "./styles";
import { getchoice } from "../../../utils.js/localstorageutility";

export default function Category({category,setcategory,loopsteps}) {
  const handlecategory = () => {
    setcategory(category.value);
    let choice=getchoice()
    if(choice=="Talk to an expert" && category.finishtrigger){
      loopsteps(category.finishtrigger)

    }else{
      loopsteps(category.trigger)
    }
  };
  return (
    <CategoryContainer onClick={handlecategory}>
      <CategoryImage src={category.img} />
      <CategoryTitle>{category.value}</CategoryTitle>
    </CategoryContainer>
  );
}

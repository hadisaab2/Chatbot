import React, { useState } from "react";
import { categories } from "../data";
import { CategoriesContainer } from "./styles";
import Category from "./Category";
import UserMessage from "../../User/UserMessage";
import { insertdata, insertstep } from "../../../utils.js/localstorageutility";

export default function Index({ loopsteps,object ,finishtrigger}) {
  const [choosen, setchoosen] = useState(null);
  const setcategory = (category) =>{
    setchoosen(category)
    insertstep({ type: "user", value:category });
    insertdata(object.key,category)

  }
  if (!choosen) {
    return (
      <CategoriesContainer>
        {categories.map((category) => {
          return <Category category={category} setcategory={setcategory} loopsteps={loopsteps}/>;
        })}
      </CategoriesContainer>
    );
  } else {
    return <UserMessage message={choosen} />;
  }
}

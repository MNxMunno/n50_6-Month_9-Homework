import React from "react";

const Items = () => {
  const data = ["Home", "Category", "Products", "Pages", "Blog", "Elements"];
  let item = data?.map((el, inx) => (
    <a key={inx} href="#">
      {el}
    </a>
  ));
  return <div className="item">{item}</div>;
};

export default Items;

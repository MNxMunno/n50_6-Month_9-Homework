import React from "react";

const Category = () => {
  const data = [
    {
      id: 1,
      img: "https://i.postimg.cc/MKbwbThj/onion.png",
      title: "Everyday Fresh & Clean with Our Products",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/N0LwcxL1/yougur.png",
      title: "Everyday Fresh & Clean with Our Products",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/s28CDZZb/sabzavot.png",
      title: "Everyday Fresh & Clean with Our Products",
    },
  ];

  let card = data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.img} alt="img" />
      <h2 className="card_title">{el.title}</h2>
      <button>Shop Now</button>
    </div>
  ));

  return (
    <section className="category">
      <div className="container">
        <div className="cards">{card}</div>
      </div>
    </section>
  );
};

export default Category;

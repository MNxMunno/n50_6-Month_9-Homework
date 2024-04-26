import axios from "axios";
import React, { useState, useEffect } from "react";
const api_url = "https://dummyjson.com/products";
import { MdOutlineShoppingCart } from "react-icons/md";
import loadingImg from "../../assets/images/loading.gif";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(api_url)
      .then((res) => setData(res.data.products))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  let card = data?.slice(0, 12).map((pro) => (
    <div className="card" key={pro.id}>
      <div className="img">
        <img src={pro.thumbnail} alt="img" />
      </div>

      <p className="rating">⭐{pro.rating}</p>
      <b>{pro.category}</b>
      <h1>{pro.title}</h1>
      <div className="price_btn">
        <p className="price">${pro.price}</p>
        <button className="cart">
          <MdOutlineShoppingCart />
          Add
        </button>
      </div>
    </div>
  ));

  return (
    <section className="products">
      <div className="container">
        <div className="product__content">
          <h1>Popular Products</h1>
          {loading ? (
            <div className="loading">
              <img src={loadingImg} alt="loading" />
            </div>
          ) : (
            <></>
          )}
          <div className="cards">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default Products;

import React from "react";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
  const dataOne = [
    "About Us",
    "Delivery Information",
    "Privacy Policy",
    "Terms & Conditions",
    "contact Us",
    "Support Center",
  ];
  let cardOne = dataOne?.map((el, inx) => (
    <a key={inx} href="#">
      {el}
    </a>
  ));
  const dataTwo = [
    "Dairy & Bakery",
    "Fruits & Vegetable",
    "Snack & Spice",
    "Juice & Drinks",
    "Chicken & Meat",
    "Fast Food",
  ];
  let cardTwo = dataTwo?.map((el, inx) => (
    <a key={inx} href="#">
      {el}
    </a>
  ));
  return (
    <footer>
      <div className="container">
        <div className="footer__content">
          <div className="cards">
            <div className="card">
              <img className="logo" src={logo} alt="logo" />
              <p className="text">
                FoodTrove is the biggest market of grocery products. Get your
                daily needs from our store.
              </p>
            </div>
            <div className="card cardOne">
              <h1>Company</h1>
              {cardOne}
            </div>
            <div className="card cardTwo">
              <h1>Category</h1>
              {cardTwo}
            </div>
            <div className="card">
              <h1>Subscribe Our Newsletter</h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import bgImg from "../../assets/images/bg-img.jpg";

function Hero() {
  const myStyle = {
    backgroundImage: `url(${bgImg})`,
    width: "100%",
    height: "100%",
    marginTop: "-70px",
    fontSize: "0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section className="hero" style={myStyle}>
      <div className="container">
        <div className="hero__content">
          <h1>The best way to stuff your wallet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            reiciendis beatae consequuntur.
          </p>
          <form>
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Your emaill address"
            />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;

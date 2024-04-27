// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../../assets/images/admin-hero.png";

const Admin = () => {
  return (
    <section className="admin" style={{ paddingTop: "120px" }}>
      <div className="container">
        <div className="cards">
          <div className="card">
            <h1>Admin panel</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              recusandae necessitatibus quasi incidunt alias adipisci pariatur
              earum iure beatae assumenda rerum quod. Tempora magni autem a
              voluptatibus neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
              rerum cum accusamus magni consequuntur architecto, ipsum deleniti
              expedita doloribus suscipit voluptatum eius perferendis amet!.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, maxime amet architecto est exercitationem optio ea
              maiores corporis beatae, dolores doloribus libero nesciunt qui
              illum? Voluptates deserunt adipisci voluptatem magni sunt sed
              blanditiis quod aspernatur! Iusto?
            </p>
          </div>
          <div className="card">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;

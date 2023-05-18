import React, { useEffect, useState, useReducer } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./Home.scss";
import Carousal from "../helpers/Carousal";
const Home = () => {
  return (
    <>
      <div>
        <div className="">
          <main style={{}}>
            <Carousal />
            <div style={{display: "flex"}}>
              <div className="col-6 p-1">
                <a href="/ProductList?g=mens">
                <img style={{width: "100%"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-MEN-OversizedTees-1681725001.jpg"></img>
                <h2>Mens</h2>
                </a>
              </div>
              <div className="col-6 p-1">
                <a href="/ProductList?g=mens">
                <img style={{width: "100%"}} src="https://images.bewakoof.com/uploads/grid/app/category-box-Oversized-tshirts-Women-1682055634.png"></img>
                <h2>Womens</h2>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;

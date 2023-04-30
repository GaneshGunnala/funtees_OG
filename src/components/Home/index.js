import React, { useEffect, useState, useReducer } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../helpers/Navbar";
import "./Home.scss";
import Carousal from "../helpers/Carousal";
const Home = () => {
  return (
    <>
      <div>
        <div class="">
        <Navbar />
          <main style={{}}>
            <Carousal />
            <p>Color</p>Hey
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;

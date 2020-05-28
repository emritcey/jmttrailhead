import React from "react";
import { Link } from "react-router-dom";
import  "../../assets/css/cr.css";

export default () => {

  return (
    <main>
    <h1>  Start packing...  </h1>
      <Link to="/packing">Packing List</Link>
      <Link to="/packing">Food</Link>
    </main>
  );
};

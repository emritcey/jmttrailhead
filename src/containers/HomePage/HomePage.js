import React from "react";

import { Link } from "react-router-dom";

export default () => {

  return (
    <main>
      <h1>Home Page</h1>
      <Link to="/packing">Packing List</Link>
      <Link to="/login">Login Page</Link>
      <Link to="/profile">Profile Page</Link>
      <a href="/auth/google">Login to Google</a>
    </main>
  );
};

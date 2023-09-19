import React from 'react';
import { NavLink } from 'react-router-dom';




const Navbarr = () => {
  return (
    <>
      <div class="topnav" id="myTopnav">
        <NavLink to="/ecomerce" class="active">Home</NavLink>
        <NavLink to="/addToProduct">Add Product +</NavLink>
        <NavLink to="/cartItem">Cart</NavLink>
      </div>
    </>
  );
};

export default Navbarr;
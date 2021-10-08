import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import CartSummary from "../cart/CartSummary";

const Example = (props) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <Navbar
        color="light"
        light
        expand="md"
        style={{ justifyContent: "space-around" }}
      >
        <NavbarBrand href="/">Shopping Cart Demo</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <CartSummary />
          <NavItem>
            <NavLink
              href="https://github.com/mehmetsinann/redux"
              target="_blank"
            >
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Example;

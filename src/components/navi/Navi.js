import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ marginBottom: "16px" }}>
      <Navbar
        color="light"
        light
        expand="md"
        style={{ justifyContent: "space-between", padding: "0px 32px" }}
      >
        <NavbarBrand href="/">Shopping Cart Demo</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <CartSummary />
          <NavItem>
            <NavLink href="https://github.com/mehmetsinann">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Example;

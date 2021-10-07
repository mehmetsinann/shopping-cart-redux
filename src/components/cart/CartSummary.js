import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Badge,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  Table,
  UncontrolledDropdown,
} from "reactstrap";

class CartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Cart is empty!</NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    let totalPrice = 0;
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart - ({this.props.cart.length})
        </DropdownToggle>
        <DropdownMenu>
          <Table>
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {this.props.cart.map((cartItem) => (
                <tr key={cartItem.product.id}>
                  <td>{cartItem.product.productName}</td>
                  <td>{cartItem.quantity}</td>
                  <td>{cartItem.product.unitPrice * cartItem.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p style={{ textAlign: "center" }}>
            {this.props.cart.map((cartItem) => {
              totalPrice =
                totalPrice + cartItem.product.unitPrice * cartItem.quantity;
            })}
            Total Price : {totalPrice}
          </p>
          <DropdownItem divider />
          <DropdownItem>Go to Cart</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps)(CartSummary);

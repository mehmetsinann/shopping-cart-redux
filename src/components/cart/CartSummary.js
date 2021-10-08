import React, { Component } from "react";
import { connect } from "react-redux";
import {
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
            Total Amount : {this.totalPrice()}
          </p>
          <DropdownItem divider />
          <DropdownItem style={{ textAlign: "center" }}>
            Go to Cart
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  totalPrice() {
    let totalAmount = 0;
    for (let i = 0; i < this.props.cart.length; i++) {
      totalAmount =
        totalAmount +
        this.props.cart[i].product.unitPrice * this.props.cart[i].quantity;
    }
    return totalAmount;
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

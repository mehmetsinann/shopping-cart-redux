import React, { Component } from "react";
import { connect } from "react-redux";
import {
  DropdownItem,
  Button,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  Table,
  UncontrolledDropdown,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";

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
          Cart - ({this.totalQuantity()})
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
                  <td>
                    <Button
                      onClick={() =>
                        this.props.actions.decreaseFromCart(cartItem.product)
                      }
                      style={{
                        backgroundColor: "#FFD302",
                        color: "black",
                        fontWeight: "bolder",
                      }}
                    >
                      -
                    </Button>
                  </td>
                  <td>{cartItem.product.productName}</td>
                  <td>{cartItem.quantity}</td>
                  <td>${cartItem.product.unitPrice * cartItem.quantity}</td>
                  <td>
                    <Button
                      onClick={() =>
                        this.props.actions.removeFromCart(cartItem.product)
                      }
                      style={{
                        backgroundColor: "#FF0000",
                        fontWeight: "bolder",
                      }}
                    >
                      x
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p style={{ textAlign: "center" }}>
            Total Amount : ${this.totalPrice()}
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

  totalQuantity() {
    let totalQuantity = 0;
    for (let i = 0; i < this.props.cart.length; i++) {
      totalQuantity = totalQuantity + this.props.cart[i].quantity;
    }
    return totalQuantity;
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

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      decreaseFromCart: bindActionCreators(
        cartActions.decreaseFromCart,
        dispatch
      ),
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);

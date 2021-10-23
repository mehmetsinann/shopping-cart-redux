import React from "react";
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

const CartSummary = (props) => {
  function renderEmpty() {
    return (
      <NavItem>
        <NavLink>Cart is empty!</NavLink>
      </NavItem>
    );
  }

  function renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart - ({totalQuantity()})
        </DropdownToggle>
        <DropdownMenu>
          <Table>
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {props.cart.map((cartItem) => (
                <tr key={cartItem.product.id}>
                  <td>
                    {cartItem.quantity > 1 ? (
                      <Button
                        onClick={() =>
                          props.actions.decreaseFromCart(cartItem.product)
                        }
                        style={{
                          backgroundColor: "#FFD302",
                          color: "black",
                          fontWeight: "bolder",
                        }}
                      >
                        -
                      </Button>
                    ) : (
                      ""
                    )}
                  </td>
                  <td>{cartItem.product.productName}</td>
                  <td>{cartItem.quantity}</td>
                  <td>${cartItem.product.unitPrice * cartItem.quantity}</td>
                  <td>
                    <Button
                      onClick={() =>
                        props.actions.removeFromCart(cartItem.product)
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
          <p style={{ textAlign: "center" }}>Total Amount : ${totalPrice()}</p>

          <DropdownItem divider />
          <Button
            onClick={() => props.actions.removeAllFromCart()}
            style={{
              width: "100%",
              backgroundColor: "#ff0000",
              fontWeight: "bold",
            }}
          >
            Remove All
          </Button>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  function totalPrice() {
    let totalAmount = 0;
    for (let i = 0; i < props.cart.length; i++) {
      totalAmount =
        totalAmount + props.cart[i].product.unitPrice * props.cart[i].quantity;
    }
    return totalAmount;
  }

  function totalQuantity() {
    let totalQuantity = 0;
    for (let i = 0; i < props.cart.length; i++) {
      totalQuantity = totalQuantity + props.cart[i].quantity;
    }
    return totalQuantity;
  }
  return <div>{props.cart.length > 0 ? renderSummary() : renderEmpty()}</div>;
};

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
      removeAllFromCart: bindActionCreators(
        cartActions.removeAllFromCart,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);

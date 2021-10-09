import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Button, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    if (product.unitsInStock > 0) {
      var addedItem = this.props.cart.find((c) => c.product.id === product.id);
      if (addedItem && addedItem.quantity === product.unitsInStock) {
        alertify.warning("Not enough stock for " + product.productName);
      } else {
        this.props.actions.addToCart({ quantity: 1, product });
        alertify.success(product.productName + " added to cart");
      }
    } else {
      alertify.warning(product.productName + " out of stock");
    }
  };

  render() {
    return (
      <div>
        <h2>
          <Badge style={{ backgroundColor: "#ffbb00" }}>Products</Badge> -
          <Badge style={{ backgroundColor: "green", marginLeft: "8px" }}>
            {this.props.currentCategory.categoryName}
          </Badge>
        </h2>
        <Table>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units in Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>${product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    onClick={() => {
                      this.addToCart(product);
                    }}
                    style={{ width: "120px" }}
                  >
                    Add to Cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

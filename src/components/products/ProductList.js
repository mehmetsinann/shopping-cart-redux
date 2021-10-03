import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  render() {
    return (
      <div>
        <h2>
          <Badge style={{ backgroundColor: "#ffbb00" }}>Products</Badge>
          <Badge style={{ backgroundColor: "green", marginLeft: "8px" }}>
            {this.props.currentCategory.categoryName}
          </Badge>

          <Table style={{ fontSize: "18px" }}>
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity Per Unit</th>
                <th>Units in Stock</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {this.props.products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitsInStock}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

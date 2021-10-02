import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h2>categories</h2>
        <h5>seçili kategori : {this.props.currentCategory.categoryName}</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
  };
}

export default connect(mapStateToProps)(CategoryList);

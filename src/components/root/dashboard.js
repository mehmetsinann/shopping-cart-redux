import React from "react";
import { Row, Col } from "reactstrap";
import CategoryList from "../categories/categoryList";
import ProductList from "../products/ProductList";

const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col xs="4">
          <CategoryList />
        </Col>
        <Col xs="8">
          <ProductList />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

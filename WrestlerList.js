import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap"; // Import Bootstrap components for grid layout

const WrestlerList = ({ wrestlers }) => {
  return (
    <Row>
      {wrestlers.map((wrestler, index) => (
        <Col sm={12} md={6} lg={4} key={index} className="mb-4">
          <div className="card p-3">
            <h5>{wrestler}</h5>
          </div>
        </Col>
      ))}
    </Row>
  );
};

WrestlerList.propTypes = {
  wrestlers: PropTypes.arrayOf(PropTypes.string).isRequired, // Validate that wrestlers is an array of strings
};

export default WrestlerList;

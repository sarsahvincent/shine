import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Card1 from "./ServicesCard1";
import Card2 from "./ServicesCard2";
import Card3 from "./ServicesCard3";
import ConcatDilog from "./ContactDialog";

function SerivesCards() {
  return (
    <div>
      <div fluid className="row m-4">
        <div className={styles.serives__cards}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              minWidth: "100%",
            }}
          >
            <h1>Our Services</h1>
            <ConcatDilog />
          </div>
        </div>

        <div className={styles.serives__home__cards}>
          <Col className="m-2">
            <Card1 />
          </Col>

          <Col className="m-2">
            <Card2 />
          </Col>

          <Col className="m-2">
            <Card3 />
          </Col>
        </div>
      </div>
    </div>
  );
}

export default SerivesCards;

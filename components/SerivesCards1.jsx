import React from "react";
import styles from "../styles/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Typography } from "@material-ui/core";

function SerivesCards() {
  return (
    <Container className={styles.serives__cards1}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h1 className={styles.main__info__heading}>
          Shine Your Home Cleaning Service
        </h1>
      </div>

      <Typography
        className={styles.main__info__subheading}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        As one of the entertainment and busy city in Alberta, your homes and
        Offices in Edmonton serve as a refuge for quiet and peace. Don’t think
        about doing chores in your home and office because we have professional
        cleaners to help you wind down and do more things that truly matter to
        you. Reliable house cleaning professional serving the greater Edmonton
        area.
      </Typography>
      <Typography
        className={styles.main__info__subheading}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        <h3>
          <strong>Service Area</strong>
        </h3>
        Shine Your Home Cleaning Services provides same day, Bi-weekly and
        monthly service to Edmonton, St. Albert, Sherwood Park, Spruce Grove,
        Stony Plain, Leduc, Beaumont, And Fort Saskatchewan. If you are outside
        these Area, Please contact us. We do provide service outside this Area,
        Additional charges may apply. Contact us with the form on the Request
        Quotes Page for a Quote. You can also call or Text we at <strong className="text-success">+15879261855</strong>,
        Or Direct Email Us at <strong className="text-success">largawofamily@gmail.com</strong> follow us on Instagram at
        shineyourhome.
      </Typography>
    </Container>
  );
}

export default SerivesCards;

import React from "react";
import styles from "../styles/Home.module.css";
import { Container } from "react-bootstrap";
import { Typography } from "@material-ui/core";

function AboutUs() {
  return (
    <Container className={styles.main__info__subheading}>
      <Typography
        className={styles.main__info__subheading}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        <h2>
          <strong>Shine Your Home Cleaning Service</strong>
        </h2>
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
          <strong>About us</strong>
        </h3>
        Shine Your Home is an owner-operated business which means we have a
        vested interest in office and home cleaning and our customer's
        satisfaction. Whether you are a small or multi-national Company, Shine
        Your Home is the right solution for you. Our Professional Cleaners
        provides the highest quality cleaning and service. We are so confident
        that you will be satisfied with our services we provide.
      </Typography>
      <Typography
        className={styles.main__info__subheading}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        <h3>
          <strong>Why choose us</strong>
        </h3>
        Looking for office and home cleaning service in Edmonton and surrounding
        area? You have come to the right place! We offer 100% Satisfaction
        Guarantee! All workers are thoroughly background checked... Outstanding
        customer service, Dedication to a quality clean, Affordable rates,
        Weekly, Bi weekly, Monthly or one time cleaning
      </Typography>
    </Container>
  );
}

export default AboutUs;

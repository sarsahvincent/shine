import React from "react";
import styles from "../styles/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
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
        <h3>
          <strong>Residential Cleaning</strong>
        </h3>
        When it comes to quality house cleaning services in Edmonton,
        absolutely, nobody beats Shine Your Home. More than just a maid service,
        Shine Your Home Services offers Edmonton residents a complete range of
        home cleaning including, house cleaning, window cleaning, carpet
        cleaning, pressure washing, high-area ladder work and various other
        customized and specialized services, designed to fit nearly any need and
        budget. Our house cleaning is performed by well trained and highly
        motivated teams of cleaning specialists with broad experience with
        properties that need thorough deep cleaning. Give Shine Your Home a call
        and your home will love you!
      </Typography>
      <Typography
        className={styles.main__info__subheading}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        <h3>
          <strong>Commercial Cleaning</strong>
        </h3>
        Shine Your Home cleaning service provide industry - leading janitorial
        and commercial cleaning Service within Edmonton, Alberta. We take care
        of all of your commercial janitorial needs includes: Office Cleaning.
        Restaurant Cleaning. Post Construction Cleaning. Move in And Out
        Cleaning. Janitorial Services. Commercial Carpet Cleaning and Light Duty
        Maintenance.
      </Typography>
      <Typography
        className={styles.main__info__subheading}
        variant="body2"
        color="textSecondary"
        component="p"
      >
        <h3>
          <strong>Cleaning For Seniors</strong>
        </h3>
        Are you helping to care for your ageing parents? It’s not uncommon to
        remain active and healthy until well into our 80s and 90s. However, it
        is natural to slow down as we age and to require some help with
        housework. This is where Shine Your Home can help. Our cleaning services
        are personally customized to meet the needs of every one of our
        customers. Although we service many homes, when we’re in yours — or your
        parents’ home — it truly is the only one that matters. As a cleaning
        professionals, it’s our goal to meet and exceed your expectations, to
        make your life easier and to provide you with more time to enjoy the
        more important things in life. We’re happy to provide: A thorough
        cleaning of your bathrooms and kitchen, Complete vacuuming of every
        room, Washing of all non-carpeted floors, Dusting baseboards, pictures,
        lampshades, window sills, furniture and light fixtures, Wiping cupboard
        exterior, Spot cleaning walls, door frames, baseboards, etc.
      </Typography>
    </Container>
  );
}

export default AboutUs;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/Home.module.css";
import HeroText from "./HeroText";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={(classes.root, styles.hero__layout)}>
      <section className={(classes.paper.replace, styles.hero__layout__gird)}>
        <HeroText />
      </section>

      <Link
        href="https://us5.list-manage.com/contact-form?u=7bf906eb25e81525958d9f192&form_id=8173a0d9c8006074b798287cb5bc08fc"
        target="_blank"
      >
        <a className={(classes.root, styles.quote)}>Request Free Quote</a>
      </Link>
    </div>
  );
}

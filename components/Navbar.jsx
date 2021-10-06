import React from "react";
import styles from "../styles/Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ dialog }) {
  const classes = useStyles();

  const name = useSelector((state) => state.user.name);

  return (
    <div className={(classes.root, styles.navbar)}>
      <AppBar position="static" className={styles.navbar}>
        <Toolbar className={styles.nav__bar}>
          <div className={styles.left__nave__items}>
            <Typography variant="h6" size="medium" className={classes.title}>
              <Link href="/">
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bolder",
                    fontFamily: "cursive",
                    textShadow: "2px 2px black",
                  }}
                >
                  {name}
                </a>
              </Link>
            </Typography>
          </div>

          <div className={styles.right__nave__items}>
            <Button color="inherit">
              <Link href="/">
                <a
                  style={{
                    textDecoration: "none",
                    color: "blue",
                    fontWeight: "bolder",
                  }}
                >
                  Home
                </a>
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/about">
                <a
                  style={{
                    textDecoration: "none",
                    color: "blue",
                    fontWeight: "bolder",
                  }}
                >
                  About
                </a>
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/service">
                <a
                  style={{
                    textDecoration: "none",
                    color: "blue",
                    fontWeight: "bolder",
                  }}
                >
                  Services
                </a>
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

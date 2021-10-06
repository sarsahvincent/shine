import React, { Fragment } from "react";
import Nav1 from "./Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Navbar, Nav } from "react-bootstrap";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Footer1 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Navbar className="bg-success d-flex align-content-center">
        <Nav className="m-auto align-items-center">
          <div className={styles.footer__items}>
            <div className="d-flex flex-column">
              <Link href="#">
                <p>
                  <MailOutlineIcon className="text-warning" />{" "}
                  <sapne className="text-warning">
                    largawofamily@gmail.com
                  </sapne>{" "}
                </p>
              </Link>
              <Link href="#">
                <p>
                  <CallIcon className="text-warning" />{" "}
                  <sapne className="text-warning">+15879261855</sapne>{" "}
                </p>
              </Link>
            </div>
            <div>
              <Link href="/" className={styles.navlink}>
                <strong
                  style={{ cursor: "pointer" }}
                  className={styles.navlink}
                >
                  {" "}
                  Home
                </strong>
              </Link>
              <Link href="/about" className={styles.navlink}>
                <strong
                  style={{ cursor: "pointer" }}
                  className={styles.navlink}
                >
                  {" "}
                  About
                </strong>
              </Link>
              <Link href="/service">
                <strong
                  style={{ cursor: "pointer" }}
                  className={styles.navlink}
                >
                  {" "}
                  Service
                </strong>
              </Link>
            </div>
          </div>
        </Nav>
      </Navbar>
    </Fragment>
  );
};

export default Footer1;

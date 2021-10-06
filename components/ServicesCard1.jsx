import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from '../styles/Home.module.css'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Link } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{marginBottom: '20px',height: '100%', width: '100%'}} className={classes.root}>
      <Link href="/service" className={styles.service__card__heading}>
      <CardHeader title="Residential Cleaning"/>
      </Link>
      
      <CardContent>
        <Typography variant="body2"  color="textSecondary" component="p">
          When it comes to quality house cleaning services in Edmonton,
          absolutely, nobody beats Shine Your Home. More than just a maid
          service, Shine Your Home Services offers Edmonton residents a complete
          range of home cleaning including, house cleaning, window cleaning,
          carpet cleaning, pressure washing, high-area ladder work and various
          other customized and specialized services, designed to fit nearly any
          need and budget.
        </Typography>
      </CardContent>
    </Card>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import styles from '../styles/Home.module.css'
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
    <Card style={{marginBottom: '20px', height: '100%',  width: '100%'}} className={classes.root}>
      <Link href="/service" className={styles.service__card__heading}>
      <CardHeader title="Commercial Cleaning" />
      </Link>
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Shine Your Home cleaning service provide industry - leading janitorial
          and commercial cleaning Service within Edmonton, Alberta. We take care
          of all of your commercial janitorial needs includes: Office Cleaning.
          Restaurant Cleaning. Post Construction Cleaning. Move in And Out
          Cleaning. Janitorial Services. Commercial Carpet Cleaning and Light
          Duty Maintenance.
        </Typography>
      </CardContent>
    </Card>
  );
}

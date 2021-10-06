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
    <Card style={{marginBottom: '20px', height: '100%',  width: '100%'}} className={classes.root}>
      <Link href="/service" className={styles.service__card__heading}>
      <CardHeader title="Cleaning For Seniors" />
      </Link>
     
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Are you helping to care for your ageing parents? It’s not uncommon to
          remain active and healthy until well into our 80s and 90s. However, it
          is natural to slow down as we age and to require some help with
          housework. This is where Shine Your Home can help. Our cleaning
          services are personally customized to meet the needs of every one of
          our customers.
        </Typography>
      </CardContent>
    </Card>
  );
}

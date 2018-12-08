import React from "react";
import MaterialCard from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "./card.module.scss";

const Card = ({ title, description, imageSrc }) => (
  <MaterialCard className={styles.card}>
    <CardMedia className={styles.media} image={imageSrc} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Typography component="p">{description}</Typography>
    </CardContent>
  </MaterialCard>
);

export default Card;

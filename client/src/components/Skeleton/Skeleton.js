import React from "react";
import { Card, CardHeader, CardContent, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const SkeletonLoader = () => {
  const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth: 345,
      margin: theme.spacing(2),
    },
    media: {
      height: 190,
    },
  }));

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
        }
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      <Skeleton animation="wave" variant="rect" className={classes.media} />
      <CardContent>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </CardContent>
    </Card>
  );
};

export default SkeletonLoader;

import React, { useState } from "react";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import AsideNav from "../AsideNav/AsideNav";
import { useStyles } from "./main.styles";
import Routes from "../Routes/Routes";

export default function Main(props) {
  const classes = useStyles();
  const [id, setCurrentId] = useState(null);
  return (
    <Container>
      <Grid
        container
        spacing={0}
        classes={{
          root: classes.outerContainer,
        }}
      >
        <Grid item xs={false} sm={3} md={3}>
          <Box borderRight={1} className={`${classes.asideWrapper}`}>
            <Paper
              className={`${classes.paperSpace}`}
              elevation={0}
              square={true}
            >
              <Typography variant="h5" component="h2">
                <Box fontWeight="700" fontFamily="Raleway" color="#000000">
                  TodoList
                </Box>
              </Typography>
            </Paper>
            <Paper
              className={`${classes.paperLink}`}
              elevation={0}
              square={true}
            >
              <AsideNav />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={false} sm={9} md={9}>
          <Paper
            className={`${classes.paperRight}`}
            elevation={0}
            square={true}
          >
            <Routes id={id} setCurrentId={setCurrentId} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

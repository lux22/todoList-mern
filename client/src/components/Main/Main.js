import React, { useState } from "react";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import AsideNav from "../AsideNav/AsideNav";
import { useStyles } from "./main.styles";
import Routes from "../Routes/Routes";
import withWidth, { isWidthDown, isWidthUp } from "@material-ui/core/withWidth";
import BottomNav from "../BottomNav/BottomNav";
const Main = (props) => {
  const classes = useStyles();
  const [id, setCurrentId] = useState(null);
  return (
    <React.Fragment>
      <Container
        classes={{
          root: classes.panel_right_root,
        }}
      >
        <Grid
          container
          spacing={0}
          classes={{
            root: classes.outerContainer,
          }}
        >
          {isWidthUp("md", props.width) && (
            <Grid item xs={12} sm={3} md={3}>
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
          )}
          <Grid item xs={12} sm={12} md={9} lg={9}>
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
      {isWidthDown("sm", props.width) && (
        <BottomNav id={id} setCurrentId={setCurrentId} />
      )}
    </React.Fragment>
  );
};

export default withWidth()(Main);

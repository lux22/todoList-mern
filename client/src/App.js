import React from "react";
import Main from "./components/Main/Main";
import { Box } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { useStyles } from "./app.styles";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./hooks/theme/baseTheme/theme";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { rootReducer } from "./store/redux/rootReducer";
import "@fontsource/roboto";
import "@fontsource/raleway";

const store = createStore(rootReducer(), compose(applyMiddleware(ReduxThunk)));

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <Box
            className={classes.bgPrimary}
            height="100%"
            width="100%"
            paddingTop={10}
            borderTop={3}
          >
            <Main classes={classes} />
          </Box>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;

import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    raleway: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Raleway",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ],
    roboto: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ],
  },
  overrides: {
    MuiInput: {
      input: {
        "&::placeholder": {
          color: "green",
        },
        color: "white", // if you also want to change the color of the input, this is the prop you'd use
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1366,
      xl: 1920,
    },
  },
});

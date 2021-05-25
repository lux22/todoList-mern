import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  bgPrimary: {
    background: "#e0e8e7",
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 80px)",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      paddingBottom: theme.spacing(5),
    },
  },
}));

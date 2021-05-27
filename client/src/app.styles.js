import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  bgPrimary: {
    background: "#e0e8e7",
    minHeight: "calc(100vh - 56px)",
    // [theme.breakpoints.up("sm")]: {
    //   height: "calc(100vh - 80px)",
    //   width: "100%",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   height: "100%",
    //   paddingBottom: theme.spacing(5),
    // },
  },
}));

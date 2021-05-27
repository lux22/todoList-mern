import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  paperSpace: {
    padding: `${theme.spacing(6)}px ${theme.spacing(4)}px ${theme.spacing(
      3
    )}px`,
  },
  paperLink: {
    padding: `0px 15px`,
    fontWeight: "600",
  },
  paperLeft: {
    background: "white",
  },
  paperRight: {
    background: "rgb(255 255 255 / 80%)",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(4),
    },
  },
  asideWrapper: {
    background: "white",
    height: "100%",
    borderRightWidth: "1px",
    borderColor: "#ddd",
  },
  outerContainer: {
    borderRadius: "20px",
    overflow: "hidden",
    minHeight: "500px",
    // marginBottom: "150px",
    boxShadow:
      "0px 11px 14px -7px rgb(230 230 230 / 0%), 0px 23px 36px 3px rgb(255 255 255 / 14%), 0px 9px 44px 8px rgb(115 115 115 / 12%)",
  },
  panel_right_root: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "calc(56% - 80px)",
    },
  },
}));

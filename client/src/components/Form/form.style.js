import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  formRoot: {
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
      width: "100%",
    },
    "& .MuiGrid-root": {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
    },
  },

  paperOuter: {
    background: "#f5f8f8",
    padding: theme.spacing(1),
    background: "#d9ecec59",
    borderRadius: "20px",
    maxWidth: "500px",
  },
  formWrapper: {
    background: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    borderRadius: "12px",
    boxShadow:
      "2px 2px 7px 3px rgb(230 230 230 / 0%), -1px 7px 3px 0px rgb(255 255 255 / 14%), -1px 1px 14px 1px rgb(115 115 115 / 12%)",
  },
  txtarea: {
    width: "100%",
    position: "relative",
    borderRadius: "4px",
    height: "3rem !important",
    padding: "18px 14px",
    resize: "none",
    fontFamily: theme.typography.raleway,
    fontWeight: "400",
    fontSize: "1rem",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    "&::placeholder": {
      color: "rgba(0, 0, 0, 0.54)",
    },
  },
}));

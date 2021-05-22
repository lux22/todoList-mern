import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: `${theme.spacing(1.2)}px 0px`,
    width: "100%",
  },
  input: {
    display: "none",
  },
  label: { width: "100%" },
  button: { width: "100%" },
}));

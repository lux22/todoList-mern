import { makeStyles } from "@material-ui/core";
import { theme } from "../../hooks/theme/baseTheme/theme";

export const useStyles = makeStyles({
  rightHeader: {
    paddingTop: theme.spacing(5.7),
    paddingBottom: theme.spacing(5),
  },
  listbox_root: {
    paddingBottom: theme.spacing(5),
  },
});

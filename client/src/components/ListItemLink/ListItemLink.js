import React from "react";
import { Link } from "react-router-dom";
import { Box, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const LinkItemList = (props) => {
  const { to = "/", Icon, primary } = props;

  const ItemText = (
    <Typography variant="h6" component="h5">
      <Box fontFamily="Roboto" fontWeight={500} fontSize={16} color="black">
        {primary}
      </Box>
    </Typography>
  );
  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to]
  );
  return (
    <React.Fragment>
      <ListItem button component={CustomLink}>
        <ListItemIcon color={"black"}>
          <Icon />
        </ListItemIcon>
        <ListItemText disableTypography={true} primary={ItemText} />
      </ListItem>
    </React.Fragment>
  );
};

export default LinkItemList;

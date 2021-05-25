import React from "react";
// Material UI Icons
import { List } from "@material-ui/core";
import {
  FolderOpenOutlined,
  CheckCircleOutline,
  MoreHorizOutlined,
} from "@material-ui/icons";

import ListItemLink from "../ListItemLink/ListItemLink";

const AsideNav = () => {
  return (
    <List component="nav" aria-label="main mailbox folders">
      {/* <ListItemLink Icon={EqualizerOutlined} primary="Overview" to="/" /> */}
      <ListItemLink Icon={FolderOpenOutlined} primary="Addtask" to="/" />
      <ListItemLink
        Icon={MoreHorizOutlined}
        primary="In progress"
        to="/inprogress"
      />
      <ListItemLink
        Icon={CheckCircleOutline}
        primary="Completed"
        to="/completed"
      />
    </List>
  );
};

export default AsideNav;

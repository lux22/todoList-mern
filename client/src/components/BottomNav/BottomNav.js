import React, { useEffect, useState } from "react";
import { BottomNavigationAction, BottomNavigation } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  FolderOpenOutlined,
  CheckCircleOutline,
  MoreHorizOutlined,
} from "@material-ui/icons";
import { useStyles } from "./bottomNav.style";
const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = useState("/");
  useEffect(() => {
    push(`${value}`);
  }, [value]);
  const { push } = useHistory();
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="addtask"
        value="/"
        icon={<FolderOpenOutlined />}
      />
      <BottomNavigationAction
        label="inprogress"
        value="/inprogress"
        icon={<MoreHorizOutlined />}
      />
      <BottomNavigationAction
        label="completed"
        value="/completed"
        icon={<CheckCircleOutline />}
      />
    </BottomNavigation>
  );
};

export default BottomNav;

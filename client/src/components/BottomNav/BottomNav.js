import React, { useEffect, useState } from "react";
import { BottomNavigationAction, BottomNavigation } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
// import { usePrevious } from "../../hooks/usePrevious";
import {
  FolderOpenOutlined,
  CheckCircleOutline,
  MoreHorizOutlined,
} from "@material-ui/icons";
import { useStyles } from "./bottomNav.style";
const BottomNav = ({ id, setCurrentId }) => {
  const classes = useStyles();
  const [value, setValue] = useState("/");
  const { push } = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/" && id) {
      setValue(pathname);
      push(pathname);
    } else {
      setValue(pathname);
    }
  }, [pathname, value, id, push]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        push(newValue);
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

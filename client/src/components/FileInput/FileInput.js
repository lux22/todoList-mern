import React, { useMemo } from "react";
import { Button, FormControl } from "@material-ui/core";
import { useStyles } from "./fileinput.style";

// Accept the types of files that needs to be uploaded
const acceptVariants = {
  word: ".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  images: "image/*",
  excel:
    ".xlsx,.xls,.csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

const makeAcceptString = (accept) => {
  if (!accept || !accept.length) {
    return "";
  }

  if (typeof accept === "string") {
    return acceptVariants[accept] ? acceptVariants[accept] : accept;
  }

  if (Array.isArray(accept)) {
    const len = accept.length;
    return accept.reduce((acc, curr, currIndex) => {
      if (acceptVariants[curr]) {
        acc += acceptVariants[curr];
      } else if (curr && curr.length && curr.trim().length) {
        acc += curr.trim();
      }

      if (len > 1 && currIndex < len - 1) {
        acc += ",";
      }

      return acc;
    }, "");
  }

  return "";
};

const FileInput = ({
  accept,
  name,
  multiple = false,
  id = "file-input",
  inputProps,
  labelProps,
  buttonProps,
  onChange,
  label = "Add File",
}) => {
  const classes = useStyles();

  const acceptString = useMemo(() => makeAcceptString(accept), [accept]);

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <input
          id={id}
          name={name}
          accept={acceptString}
          className={classes.input}
          multiple={multiple}
          type="file"
          onChange={onChange}
          {...inputProps}
        />
        <label className={classes.label} htmlFor={id} {...labelProps}>
          <Button
            variant="contained"
            component="div"
            className={classes.button}
            {...buttonProps}
            disableElevation
          >
            {label}
          </Button>
        </label>
      </FormControl>
    </div>
  );
};

export default FileInput;

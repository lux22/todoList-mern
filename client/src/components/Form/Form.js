import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Paper,
  TextField,
  Box,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import FileInput from "../FileInput/FileInput";
import { Add } from "@material-ui/icons";
import { useStyles } from "./form.style";
import { taskPost, updateTask } from "../../store/redux/action/taskaction";

const Form = ({ id, setCurrentId, history, taskStatus }) => {
  console.log(history);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [filepath, setFilePath] = useState(null);
  const [taskData, setNewTask] = useState({
    title: "",
    description: "",
    assigned: "",
    tags: "",
  });

  const taskStore = useSelector((state) =>
    id ? state.taskReducer.find((item) => item._id === id) : taskData
  );

  useEffect(() => {
    setNewTask(taskStore);
  }, [taskStore]);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onChange = async (e) => {
    const { files, name } = e.target;
    const fullPath = e.target.value.split("\\");
    let base64;
    setFilePath(fullPath[fullPath.length - 1]);
    if (files && files[0]) {
      base64 = await convertToBase64(files[0]);
    }
    setNewTask({
      ...taskData,
      [name]: base64,
    });
  };

  const fnSetTextValue = (ev) => {
    const { value, name } = ev.target;
    setNewTask({
      ...taskData,
      [name]: value,
    });
  };

  const fnTaskFormSubmit = (ev) => {
    ev.preventDefault();
    try {
      if (id) {
        dispatch(updateTask(id, taskData));
        history.push("/inprogress");
      } else {
        dispatch(taskPost(taskData));
      }
      clear();
    } catch (err) {
      console.log(err);
    }
  };

  const clear = () => {
    setNewTask({ title: " ", description: " ", assigned: " ", tags: " " });
  };

  return (
    <Paper
      classes={{
        root: classes.paperOuter,
      }}
      elevation={0}
    >
      <form
        className={classes.formRoot}
        noValidate
        autoComplete="off"
        onSubmit={fnTaskFormSubmit}
      >
        <Box className={classes.formWrapper} display="flex" flexWrap="wrap">
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                required
                name="title"
                id="Title"
                label="Title"
                variant="outlined"
                value={taskData.title}
                className={classes.txtroot}
                onChange={fnSetTextValue}
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                name="assigned"
                id="Assigned"
                label="Assigned"
                variant="outlined"
                size="small"
                value={taskData.assigned}
                className={classes.txtroot}
                onChange={fnSetTextValue}
              />
            </Grid>
            <Grid
              item
              xs={6}
              classes={{
                root: classes.gridRow,
              }}
            >
              <TextField
                name="tags"
                required
                id="Tags"
                label="Tags"
                variant="outlined"
                size="small"
                value={taskData.tags}
                className={classes.txtroot}
                onChange={fnSetTextValue}
              />
            </Grid>
            <Grid
              item
              xs={6}
              classes={{
                root: classes.gridRow,
              }}
            >
              <FileInput
                accept={["jpg", "png"]}
                name="selectedFile"
                buttonProps={{ color: "primary" }}
                label={filepath ? filepath : "Add Image"}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex">
                <TextareaAutosize
                  name="description"
                  required
                  value={taskData.description}
                  id="description"
                  label="Description"
                  variant="outlined"
                  size="small"
                  className={classes.txtarea}
                  placeholder="Description"
                  onChange={fnSetTextValue}
                />
              </Box>
            </Grid>
            <Box display="flex" justifyContent="flex-end" width="100%">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<Add />}
              >
                {id ? "Update" : "Add task"}
              </Button>
            </Box>
          </Grid>
        </Box>
      </form>
    </Paper>
  );
};

export default Form;

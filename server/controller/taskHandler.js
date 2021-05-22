import taskList from "../models/taskList";

export const getAllTask = async (req, res) => {
  try {
    const gettasklist = await taskList.find();
    res.status(200).json(gettasklist);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const postTask = async (req, res) => {
  const postdata = req.body;
  const newdata = { ...postdata, selectedFile: res.selectedFile };
  // const data = new taskList(postda);
  try {
    const data = await taskList.create({ ...newdata });
    res.status(201).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateTask = async (req, res) => {
  const { id: _id } = req.params;
  const updateData = req.body;
  const newdata = { ...updateData, selectedFile: res.selectedFile };
  try {
    const updateTask = await taskList.findByIdAndUpdate(
      _id,
      { ...newdata, _id },
      { new: true }
    );
    res
      .status(200)
      .json({ msg: `updated data with id: ${_id}`, data: updateTask });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await taskList.findByIdAndRemove(id);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

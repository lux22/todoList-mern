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
  const updateData = req.body;
  try {
    const data = await taskList.create({ ...updateData });
    res.status(201).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateTask = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const updateData = req.body;
    const updateTask = await taskList.findByIdAndUpdate(
      _id,
      { ...updateData },
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

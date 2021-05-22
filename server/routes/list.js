// Define routes for the list
import express from "express";
import {
  getAllTask,
  postTask,
  updateTask,
  deleteTask,
} from "../controller/taskHandler";
import reduceBase64 from "../middleware/redBase64";

const router = express.Router();

router.get("/", getAllTask);
router.post("/", reduceBase64, postTask);
router.put("/:id", reduceBase64, updateTask);
router.delete("/:id", deleteTask);

export default router;

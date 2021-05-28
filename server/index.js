import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import listRouter from "./routes/list";
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/task", listRouter);

// const CONNECT_URL_ =
//   "mongodb+srv://todolist:X19kTW2X47bfOAAO@mongocluster.hqcdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const CONNECT_URL = "mongodb://localhost/todolist";
const PORT = process.env.PORT || 5000;

const connectMongoDb = async () => {
  try {
    await mongoose.connect(CONNECT_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`Server is started at port ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

mongoose.set("useFindAndModify", false);

connectMongoDb();

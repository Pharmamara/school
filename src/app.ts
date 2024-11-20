import express from "express";
import bodyParser from "body-parser";
import studentRoutes from "./routes/students";
import teacherRoutes from "./routes/teachers";
import gradeRoutes from "./routes/grades";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Роуты
app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);
app.use("/grades", gradeRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`School app running on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("School app is running!");
});

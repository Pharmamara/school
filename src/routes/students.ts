import express from "express";
import { school } from "../data";

const router = express.Router();

// Получить всех учеников
router.get("/", (req, res) => {
  res.json(school.students);
});

// Получить ученика по ID
router.get("/:id", (req, res) => {
  const student = school.students.find((s) => s.id === parseInt(req.params.id));
  if (!student) {
    res.status(404).json({ message: "Student not found" });
  } else {
    res.json(student);
  }
});

// Получить оценки ученика
router.get("/:id/grades", (req, res) => {
  const studentId = parseInt(req.params.id);
  const grades = school.grades.filter((grade) => grade.studentId === studentId);
  res.json(grades);
});

export default router;

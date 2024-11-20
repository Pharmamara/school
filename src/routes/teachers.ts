import express from "express";
import { school } from "../data";

const router = express.Router();

// Получить всех учителей
router.get("/", (req, res) => {
  res.json(school.teachers);
});

// Получить учителя по ID
router.get("/:id", (req, res) => {
  const teacher = school.teachers.find((t) => t.id === parseInt(req.params.id));
  if (!teacher) {
    res.status(404).json({ message: "Teacher not found" });
  } else {
    res.json(teacher);
  }
});

// Получить предметы учителя
router.get("/:id/subjects", (req, res) => {
  const teacherId = parseInt(req.params.id);
  const subjects = school.subjects.filter((s) => s.teacherId === teacherId);
  res.json(subjects);
});

export default router;

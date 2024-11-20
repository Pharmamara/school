import express from "express";
import { school } from "../data";

const router = express.Router();

// Получить все оценки
router.get("/", (req, res) => {
  res.json(school.grades);
});

// Получить оценки по предмету
router.get("/subject/:id", (req, res) => {
  const subjectId = parseInt(req.params.id);
  const grades = school.grades.filter((grade) => grade.subjectId === subjectId);
  res.json(grades);
});

export default router;

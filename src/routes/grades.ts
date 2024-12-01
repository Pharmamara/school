import express, { Request, Response } from "express";
import { school } from "../data";

const router = express.Router();

// Получить оценки всех студентов
router.get("/", (_req: Request, res: Response) => {
  res.json(school.grades);
});

// Получить оценки конкретного студента по ID.

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "ID is required" });
    return;
  }
  const studentId = parseInt(id, 10);
  const grades = school.grades[studentId];

  if (!grades) {
    res.status(404).json({ message: "Не найдены оценки для данного студента" });
    return; // Явный возврат
  }

  res.json(grades);
});

export default router;

import express, { Request, Response } from "express";
import { school, Teacher } from "../data";

const router = express.Router();

// Получить всех учителей
router.get("/", (_req: Request, res: Response) => {
  res.json(school.teachers);
});

// Получить учителя по ID
// Смоделируем ошибку "noUnusedParameters": true, то есть параметр функции объявлен, но нигде не используется.
router.get("/:id", (req: Request, res: Response) => {
  const teacherId = parseInt(req.params.id, 10); // праметр res объявлен, но нигде не используется
  const teacher = school.teachers.find((t) => t.id === teacherId);
  if (!teacher) {
    console.log("Teacher not found"); // Вместо res используется console.log
    return;
  }

  console.log(teacher); // Вместо ответа используется console.log
});

/* сообщение об ошибке: 
[{
	"resource": "/c:/Users/Swift/OneDrive/ITGIRLS/31_ts/school/school/src/routes/teachers.ts",
	"owner": "typescript",
	"code": "6133",
	"severity": 4,
	"message": "'res' is declared but its value is never read.",
	"source": "ts",
	"startLineNumber": 13,
	"startColumn": 35,
	"endLineNumber": 13,
	"endColumn": 38,
	"tags": [
		1
	]
}]
  Причина ошибки: 
  Параметр res используется для отправки HTTP-ответов, но в коде вместо этого используется console.log. Из-за этого TypeScript считает, что res объявлен, но не используется.
  Исправление:
  Использовать res для отправки ответов (оптимален для Express). Вместо использования console.log нужно отправить HTTP-ответы через res (решение ниже).
  Использовать _res для подавления ошибки. Если res не нужен, но его нужно оставить для совместимости (например, роуты Express), можно заменить его на _res.

  /*
  router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "ID is required" });
    return;
  }
  const teacherId = parseInt(id, 10);
  if (isNaN(teacherId)) {
    res.status(400).json({ message: "Invalid teacher ID" });
    return;
  }

  const teacher = school.teachers.find((t) => t.id === teacherId);

  if (!teacher) {
    res.status(404).json({ message: "Teacher not found" });
    return; // Явный возврат
  }

  res.json(teacher);
});*/

// Добавить нового учителя
router.post("/", (req: Request, res: Response) => {
  const { id, name, subject } = req.body as Teacher;

  if (!id || !name || !subject) {
    res.status(400).json({ message: "Invalid teacher data" });
    return;
  }

  const newTeacher: Teacher = { id, name, subject };
  school.teachers.push(newTeacher);

  res.status(201).json(newTeacher);
});

export default router;

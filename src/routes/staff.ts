import express, { Request, Response } from "express";
import { school, Staff } from "../data";

const router = express.Router();

// Получить всех сотрудников
router.get("/", (_req: Request, res: Response) => {
  res.json(school.staff);
});

// Получить сотрудника по ID
router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "ID is required" });
    return;
  }
  const staffId = parseInt(id, 10);
  if (isNaN(staffId)) {
    res.status(400).json({ message: "Invalid staff ID" });
    return;
  }
  const staffMember = school.staff.find((s) => s.id === staffId);

  if (!staffMember) {
    res.status(404).json({ message: "Staff member not found" });
    return;
  }

  res.json(staffMember);
});

// Добавить нового сотрудника
router.post("/", (req: Request, res: Response) => {
  const { id, name, role } = req.body as Staff;

  if (!id || !name || !role) {
    res.status(400).json({ message: "Invalid staff data" });
    return;
  }

  const newStaff: Staff = { id, name, role };
  school.staff.push(newStaff);

  res.status(201).json(newStaff);
});

// Используем CustomRequest в обработчике для моделирования ошибки skipLibCheck
router.get("/staff", (req: CustomRequest, res: Response) => {
  // Ошибка: CustomProperty отсутствует в Request, но из-за флага skipLibCheck не проверяется
  res.json({ message: req.customProperty }); // Ошибка: Property 'customProperty' does not exist on type 'Request'
});
/*решение: добавлено свойство customProperty как необязательное, чтобы избежать ошибок в случае, если оно не будет передано. Также добавлена проверка, чтобы обработать возможное отсутствие свойства. 
router.get("/staff", (req: CustomRequest, res: Response) => {
  if (req.customProperty) {
    res.json({ message: req.customProperty });
  } else {
    res.status(400).json({ message: "Custom property not found" });
  }
});*/

export default router;

// смоделируем ошибку "noFallthroughCasesInSwitch": true (предотвращает случайное пропускание операторов break в конструкции switch)

export function getEmployeeRole(role: string): string {
  switch (role) {
    case "Teacher":
      console.log("Это Преподаватель");
    // Ошибка: нет оператора break или return, выполнение продолжится в следующий case
    case "Principal":
      console.log("Это Завхоз");
    // Ошибка: выполнение продолжится в следующий case
    case "Janitor":
      console.log("Это Уборщица");
      break; // Оператор break необходим для завершения выполнения
    default:
      console.log("Функция не определена");
  }
}
/* [{
	"resource": "/c:/Users/Swift/OneDrive/ITGIRLS/31_ts/school/school/src/routes/staff.ts",
	"owner": "typescript",
	"code": "7029",
	"severity": 4,
	"message": "Fallthrough case in switch.",
	"source": "ts",
	"startLineNumber": 55,
	"startColumn": 5,
	"endLineNumber": 55,
	"endColumn": 20
}]

Исправление: 
добавить оператор break/ return для каждого case, чтобы избежать перехода в следующий case без явного завершения

export function getEmployeeRole(role: string): string {
  switch (role) {
    case 'Teacher':
      console.log('Это Преподаватель');
      break; // Завершаем выполнение для Teacher
    case 'Principal':
      console.log('Это Завхоз');
      break; // Завершаем выполнение для Principal
    case 'Janitor':
      console.log('Это Уборщица');
      break; // Завершаем выполнение для Janitor
    default:
      console.log('Функция не определена');
  }
}
*/

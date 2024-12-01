"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const router = express_1.default.Router();
// Смоделируем ошибку "noUnusedLocals": true. Эта переменная определена, но не используется:
const unusedVariable = "I am unused!";
/*сообщение об ошибке: [{
    "resource": "/c:/Users/Swift/OneDrive/ITGIRLS/31_ts/school/school/src/routes/students.ts",
    "owner": "typescript",
    "code": "6133",
    "severity": 4,
    "message": "'unusedVariable' is declared but its value is never read.",
    "source": "ts",
    "startLineNumber": 7,
    "startColumn": 7,
    "endLineNumber": 7,
    "endColumn": 21,
    "tags": [
        1
    ]
}]
  способ решения проблемы:
  Удалить неиспользуемую переменную (если она не нужна);
  Использовать переменную в коде (явно добавить ее применение в логику приложения):
  const unusedVariable = "I am unused!";
console.log(unusedVariable); // Теперь переменная используется*/
// Получить всех студентов
router.get("/", (_req, res) => {
    res.json(data_1.school.students);
});
// Получить студента по ID
router.get("/:id", (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: "ID is required" });
        return;
    }
    const studentId = parseInt(id, 10);
    if (isNaN(studentId)) {
        res.status(400).json({ message: "Invalid student ID" });
        return;
    }
    const student = data_1.school.students.find((s) => s.id === studentId);
    if (!student) {
        res.status(404).json({ message: "Student not found" });
        return;
    }
    res.json(student);
});
// Добавить нового студента
router.post("/", (req, res) => {
    const { id, name, age, grade } = req.body;
    if (!id || !name || !age || !grade) {
        res.status(400).json({ message: "Invalid student data" });
        return;
    }
    const newStudent = { id, name, age, grade };
    data_1.school.students.push(newStudent);
    res.status(201).json(newStudent);
});
exports.default = router;

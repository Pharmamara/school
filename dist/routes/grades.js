"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const router = express_1.default.Router();
// Получить оценки всех студентов
router.get("/", (_req, res) => {
    res.json(data_1.school.grades);
});
// Получить оценки конкретного студента по ID.
router.get("/:id", (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: "ID is required" });
        return;
    }
    const studentId = parseInt(id, 10);
    const grades = data_1.school.grades[studentId];
    if (!grades) {
        res.status(404).json({ message: "Не найдены оценки для данного студента" });
        return; // Явный возврат
    }
    res.json(grades);
});
exports.default = router;

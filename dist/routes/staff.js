"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const router = express_1.default.Router();
// Получить всех сотрудников
router.get("/", (_req, res) => {
    res.json(data_1.school.staff);
});
// Получить сотрудника по ID
router.get("/:id", (req, res) => {
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
    const staffMember = data_1.school.staff.find((s) => s.id === staffId);
    if (!staffMember) {
        res.status(404).json({ message: "Staff member not found" });
        return;
    }
    res.json(staffMember);
});
// Добавить нового сотрудника
router.post("/", (req, res) => {
    const { id, name, role } = req.body;
    if (!id || !name || !role) {
        res.status(400).json({ message: "Invalid staff data" });
        return;
    }
    const newStaff = { id, name, role };
    data_1.school.staff.push(newStaff);
    res.status(201).json(newStaff);
});
// Смоделируем ошибку "noImplicitReturns": true (в функции есть путь выполнения, который не возвращает значение)
/* Сообщение об ошибке:


 
*/
exports.default = router;

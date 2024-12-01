"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const students_1 = __importDefault(require("./routes/students"));
const teachers_1 = __importDefault(require("./routes/teachers"));
const grades_1 = __importDefault(require("./routes/grades"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(body_parser_1.default.json());
// Роуты
app.use("/students", students_1.default);
app.use("/teachers", teachers_1.default);
app.use("/grades", grades_1.default);
// Запуск сервера
app.listen(PORT, () => {
    console.log(`School app running on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
    res.send("School app is running!");
});

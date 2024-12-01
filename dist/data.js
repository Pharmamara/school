"use strict";
// Типы для данных приложения школы
Object.defineProperty(exports, "__esModule", { value: true });
exports.school = void 0;
// Структура данных школы
exports.school = {
    students: [],
    teachers: [],
    staff: [],
    grades: {},
};
// Пример заполнения данных для тестирования
exports.school.students.push({ id: 1, name: "Пушкин Александр", age: 14, grade: "9A" }, { id: 2, name: "Достоевский Федор", age: 15, grade: "10B" }, { id: 3, name: "Лобачевский Александр", age: 17, grade: "9B" });
exports.school.teachers.push({ id: 1, name: "Иванов Иван Иванович", subject: "Математика" }, { id: 2, name: "Петров Петр Петрович", subject: "Физика" }, { id: 3, name: "Сидорова Светлана Сергеевна", subject: "Английский" });
exports.school.staff.push({ id: 1, name: "Родионова Арина Ивановна", role: "Уборщица" }, { id: 2, name: "Петров Филипп Филиппович", role: "Завхоз" });
exports.school.grades[1] = { Математика: 90, Английский: 85 };
exports.school.grades[2] = { Математика: 75, Английский: 88 };
exports.default = exports.school;

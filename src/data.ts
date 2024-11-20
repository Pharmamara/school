// Школьные данные и типы
export type Subject = {
  id: number;
  name: string;
  teacherId: number;
};

export interface Person {
  id: number;
  name: string;
  age: number;
}
//производные
export interface Teacher extends Person {
  subjectIds: number[];
  yearsOfExperience: number;
}

export interface Student extends Person {
  grade: number;
  subjects: number[];
}

export interface Staff extends Person {
  position: string;
}

export interface Grade {
  studentId: number;
  subjectId: number;
  grade: number;
}

export interface School {
  subjects: Subject[];
  teachers: Teacher[];
  students: Student[];
  staff: Staff[];
  grades: Grade[];
}

export const school: School = {
  subjects: [
    { id: 1, name: "математика", teacherId: 1 },
    { id: 2, name: "физика", teacherId: 2 },
    { id: 3, name: "химия", teacherId: 3 },
  ],
  teachers: [
    {
      id: 1,
      name: "Иванов Иван Иванович",
      age: 35,
      subjectIds: [1],
      yearsOfExperience: 10,
    },
    {
      id: 2,
      name: "Петров Петр Петрович",
      age: 40,
      subjectIds: [2],
      yearsOfExperience: 15,
    },
    {
      id: 3,
      name: "Сидорова Светлана Сергеевна",
      age: 29,
      subjectIds: [3],
      yearsOfExperience: 5,
    },
  ],
  students: [
    { id: 1, name: "Пушкин Александр", age: 15, grade: 10, subjects: [1, 2] },
    { id: 2, name: "Достоевский Федор", age: 14, grade: 9, subjects: [2, 3] },
    {
      id: 3,
      name: "Лобаческий Александр",
      age: 16,
      grade: 8,
      subjects: [1, 3],
    },
  ],
  staff: [
    { id: 1, name: "Родионова Арина Ивановна", age: 50, position: "Уборщица" },
    { id: 2, name: "Петров Филипп Филиппович", age: 45, position: "Завхоз" },
  ],
  grades: [
    { studentId: 1, subjectId: 1, grade: 5 },
    { studentId: 1, subjectId: 2, grade: 4 },
    { studentId: 2, subjectId: 2, grade: 3 },
    { studentId: 2, subjectId: 3, grade: 5 },
  ],
};

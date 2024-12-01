// Типы для данных приложения школы

// Тип для студента
export interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
}

// Тип для учителя
export interface Teacher {
  id: number;
  name: string;
  subject: string;
}

// Тип для сотрудника
export interface Staff {
  id: number;
  name: string;
  role: string;
}

// Тип для оценок студентов
export type Grades = {
  [studentId: number]: {
    [subject: string]: number;
  };
};

// Структура данных школы
export const school = {
  students: [] as Student[],
  teachers: [] as Teacher[],
  staff: [] as Staff[],
  grades: {} as Grades,
};

// Неправильно описанный тип данных для моделирования ошибки при включенном флаге "skipLibCheck"
export interface CustomRequest extends Request {
  customProperty: string; // Эта ошибка будет игнорироваться при skipLibCheck
}

/* Ошибка возникнет из-за того, что мы добавили свойство customProperty в тип CustomRequest, который расширяет тип Request из библиотеки express. Однако в типах библиотеки express этого свойства нет, и TypeScript не может найти это свойство.
Если флаг skipLibCheck включен, эта ошибка не будет проверяться в типах самой библиотеки, и компиляция TypeScript будет пропускать эту ошибку 

Правильный тип для CustomRequest
export interface CustomRequest extends Request {
  customProperty?: string; // Теперь свойство optional (необязательное)
}
*/

// Пример заполнения данных для тестирования
school.students.push(
  { id: 1, name: "Пушкин Александр", age: 14, grade: "9A" },
  { id: 2, name: "Достоевский Федор", age: 15, grade: "10B" },
  { id: 3, name: "Лобачевский Александр", age: 17, grade: "9B" }
);

school.teachers.push(
  { id: 1, name: "Иванов Иван Иванович", subject: "Математика" },
  { id: 2, name: "Петров Петр Петрович", subject: "Физика" },
  { id: 3, name: "Сидорова Светлана Сергеевна", subject: "Английский" }
);

school.staff.push(
  { id: 1, name: "Родионова Арина Ивановна", role: "Уборщица" },
  { id: 2, name: "Петров Филипп Филиппович", role: "Завхоз" }
);

school.grades[1] = { Математика: 90, Английский: 85 };
school.grades[2] = { Математика: 75, Английский: 88 };

export default school;

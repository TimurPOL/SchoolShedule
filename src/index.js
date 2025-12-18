import {Teacher} from "./Model/Teacher.js"
import {Student} from "./Model/Student.js"
import {Subject} from "./Model/Subject.js"

const subjects = [ new Subject(1, "Математика"), new Subject(2, "Українська мова"), new Subject(3, "Англійська мова"), new Subject(4, "Історія"), new Subject(5, "Фізика"),  new Subject(6, "Хімія"), new Subject(7, "Біологія"), new Subject(, "Інформатика"),];

const students = [
  { id: 1, name: "Іван", surname: "Петренко", age: 12, marks: [] },
  { id: 2, name: "Олена", surname: "Коваль", age: 13, marks: [] },
  { id: 3, name: "Максим", surname: "Іванов", age: 14, marks: [] },
  { id: 4, name: "Анна", surname: "Шевченко", age: 15, marks: [] },
  { id: 5, name: "Дмитро", surname: "Бондар", age: 13, marks: [] },
  { id: 6, name: "Марія", surname: "Сидоренко", age: 14, marks: [] },
  { id: 7, name: "Артем", surname: "Мельник", age: 15, marks: [] },
  { id: 8, name: "Софія", surname: "Романюк", age: 12, marks: [] },
  { id: 9, name: "Влад", surname: "Лисенко", age: 14, marks: [] },
  { id: 10, name: "Катерина", surname: "Гринь", age: 16, marks: [] },
  { id: 11, name: "Роман", surname: "Павленко", age: 13, marks: [] },
  { id: 12, name: "Дарина", surname: "Кузьменко", age: 14, marks: [] },
  { id: 13, name: "Олексій", surname: "Ткаченко", age: 15, marks: [] },
  { id: 14, name: "Юлія", surname: "Мороз", age: 12, marks: [] },
  { id: 15, name: "Богдан", surname: "Кравчук", age: 16, marks: [] },
  { id: 16, name: "Аліна", surname: "Дяченко", age: 14, marks: [] },
  { id: 17, name: "Кирило", surname: "Поліщук", age: 13, marks: [] },
  { id: 18, name: "Ірина", surname: "Савчук", age: 15, marks: [] },
  { id: 19, name: "Назар", surname: "Олійник", age: 14, marks: [] },
  { id: 20, name: "Вероніка", surname: "Захаренко", age: 12, marks: [] }
];
const subjects = [
  new Subject(1, "Математика"),
  new Subject(2, "Українська мова"),
  new Subject(3, "Англійська мова"),
  new Subject(4, "Історія"),
  new Subject(5, "Фізика"),
  new Subject(6, "Хімія"),
  new Subject(7, "Біологія"),
  new Subject(8, "Інформатика")
];
    


for (let a of masStudent){
    console.log(a)
}

for (let a of masStudent){
    if(a.age >= 15){
        console.log(a)
    }
}

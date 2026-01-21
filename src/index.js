import {Teacher} from "./Model/Teacher.js"
import {Student} from "./Model/Student.js"
import {Subject} from "./Model/Subject.js"


    
// Прицюємо з кожним елементом, повертає undefined

/*
for (let a of students){
    console.log(a)
}
*/
students.forEach((st) => console.log(st));



// Повертає новий масив, з елементами, які задовольняють умову
/*
for (let a of students){
    if(a.age >= 15){
        console.log(a)
    }
}
*/
const studentsAgeMore15 = students.filter((st) => st.age >= 15);



// Перетворюємо кожен елементо, повертає новий масив
/*
const newStudents = [];
for (let a of students){
    let fullName = a.name + ' ' + a.surname;
    newStudents.push(fullName);
}
*/
const newStudents = students.map((st) => st.name + ' ' + st.surname);



// Повертає перший елемент/індекс, який задовольняє умову
/*
let student = null;
let index = -1;
for (let i = 0; i < students.length; i++){
    if(students[i].age > 15){
        student =  students[i];
        index = i;
        break;
    }
}
*/
let student = students.find((st) => st.age > 15);
let index = students.findIndex((st) => st.age > 15);



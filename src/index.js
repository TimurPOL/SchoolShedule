import {Teacher} from "./Model/Teacher.js"
import {Student} from "./Model/Student.js"

let student = new Student(1,"Ivan","Ivan","6-A",12)
let student1 = new Student(2,"Oksana","Kovolenko","8-a",14)
let student2 = new Student(3,"Petro","Kozlenko","9-b",15)
let student3 = new Student(4,"Leonid","Ivanenko","9-b",15)
let student4 = new Student(5,"Maksim","Kuchma","10-b",16)
let student5 = new Student(6, "Dmytro", "Shevchenko", "7-б", 13);
let student6 = new Student(7, "Olena", "Kravchenko", "8-б", 14);
let student7 = new Student(8, "Taras", "Moroz", "10-а", 16);
let student8 = new Student(9, "Marina", "Bondarenko", "11-б", 17);
let student9 = new Student(10, "Sofia", "Petrushko", "6-б", 12);



let teacher = new Teacher(1,"Nataliya","Oleksiivna","Biology","6-a")
let teacher2 = new Teacher(2,"Katerina","Andriivna","marh","5-a")
let teacher3 = new Teacher(3, "Iryna", "Mykolayivna", "Math", "7-б");
let teacher4 = new Teacher(4, "Volodymyr", "Olehovič", "History", "10-а");
let teacher5 = new Teacher(5, "Sergiy", "Vasylovych", "Physics", "11-б");
let teacher6 = new Teacher(6, "Olha", "Petrovna", "Chemistry", "8-б");
let teacher7 = new Teacher(7, "Andriy", "Stepanovych", "English", "6-б");


const masStudent = []
masStudent.push(student,student1,student2,student3,student4,student5,student6,student7,student8,student9)
const masTeacher = []
masTeacher.push(teacher,teacher2,teacher3,teacher4,teacher5,teacher6,teacher7)

for (let a of masStudent){
    console.log(a)
}

for (let a of masStudent){
    if(a.age >= 15){
        console.log(a)
    }
}

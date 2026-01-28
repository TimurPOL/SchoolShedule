export class Teacher {

    constructor(id, name, surname,age) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.subjects = [];
        this.classes = [];
    }

    getFullName() {
        return this.name + " " + this.surname;
    }

    addMark(student, mark) {
        student.marks.push(mark);
    }

    assignHomework(subjectId, text) {
        console.log("Домашка по", subjectId, ":", text);
    }

    createLesson(topic, date) {
        return new Lesson(Date.now(), null, this.id, null, date, topic);
    }

    viewStudentProgress(student) {
        return student.marks;
    }
}

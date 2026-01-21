export class Student {

    constructor(id, name, surname, classId, age) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.classId = classId;
        this.age = age;
        this.marks = [];
    }

    getFullName() {
        return this.name + " " + this.surname;
    }

    getMarksBySubject(subjectId) {
        return this.marks.filter(m => m.subjectId === subjectId);
    }

    getAverage(subjectId) {
        let list = this.getMarksBySubject(subjectId);
        if (list.length === 0) return 0;

        let sum = 0;
        for (let m of list) {
            sum += m.value;
        }
        return sum / list.length;
    }
}

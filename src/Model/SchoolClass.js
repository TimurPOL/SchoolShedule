export class SchoolClass {
  constructor(id, name, classTeacherId, scheduleId = null) {
    this.id = id;
    this.name = name;
    this.students = [];
    this.classTeacherId = classTeacherId;
    this.subjects = [];
    this.scheduleId = scheduleId;
  }

  getClassName() {
    return this.name;
  }

  addStudent(studentId) {
    if (!this.students.includes(studentId)) {
      this.students.push(studentId);
    }
  }

  removeStudent(studentId) {
    this.students = this.students.filter(id => id !== studentId);
  }

  getStudents() {
    return this.students;
  }

  addSubject(subjectId) {
    if (!this.subjects.includes(subjectId)) {
      this.subjects.push(subjectId);
    }
  }

  getSchedule() {
    return this.scheduleId;
  }
}

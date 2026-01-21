// CRUD

import {studentsTable} from '../DB/StudentsTable.js';

export class StudentRepository{
    getStudentsAll() {
        return studentsTable;
    }

    getStudentById(findId) {
        return studentsTable.find((st) => st.id === findId);
    }

    createStudent(newStudent) {
        studentsTable.push(newStudent);
    }

    deleteStudentById(deleteId) {
        let deletedStudent = this.getStudentById(deleteId);
        let deletedIndex = studentsTable.findIndex((st) => st === deletedStudent);

        studentsTable.splice(deletedIndex, 1);
    }
}


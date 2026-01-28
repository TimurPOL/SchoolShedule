import {schoolClassTable} from '../DB/SchoolClassTable.js';
import{TeacherRepository} from './TeacherRepository';
import{StudentRepository} from './StudentRepository';

export class SchoolClassRepository{
 
    constructor() {
        this.studentRepository = new StudentRepository();
        this.teacherRepository = new TeacherRepository();
    }
 
 
 
 
 
    getClassAll() {
        return schoolClassTable;
    }

    getStudentsByIdClass(classId){
        return this.studentRepository.getAllStudentByIdClass(classId);
    }

    getTeacherClassByIdClass(classId){
        const schoolClass = this.getClassById(classId);
        if (schoolClass) {
            return this.teacherRepository.getTeacherById(schoolClass.classTeacherId);
        }
        return null;
    }

                                                                                                                                          

    getClassById(findId) {
        return schoolClassTable.find((st) => st.id === findId);
    }

    createClass(newClass) {
        schoolClassTable.push(newClass);
    }
    
    deleteClassById(deleteId) {
        let deletedClass = this.getClassById(deleteId);
        let deletedIndex = schoolClassTable.findIndex((st) => st === deletedClass);

        schoolClassTable.splice(deletedIndex, 1);
    }
}


import {subjectTable} from "../DB/SubjectTable.js"
import {TeacherRepository} from "./TeacherRepository.js"

export class SubjectRepository{
    constructor() {
        this.teacherRepository = new TeacherRepository();                                              
    }

    getSubjectById(findId) {
        return subjectTable.find((st) => st.id === findId);
    }

    deleteSubjectById(deleteId){
        let findSubject = this.getSubjectById(deleteId);
        let  deletedIndex = subjectTable.findIndex((st) => st === findSubject)
        subjectTable.splice(deletedIndex,1);
    }
    getAllSubject(){
        return subjectTable;
    }

    getTeacherBySubjectId(subjectId){
        const subject = this.getSubjectById(subjectId);
        if (subject) {
            return this.teacherRepository.getAllTeachers().filter(teacher => teacher.id === subject.teacherId);
        }
        return null;
    }

}
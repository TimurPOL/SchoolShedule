import {teacherTable} from "../DB/TeacherTable.js"
import {SubjectRepository} from "../Repository/SubjectRepository.js";

export class TeacherRepository{
    constructor() {
        this.subjectRepository = new SubjectRepository();
    }
    getTeacherById(findId) {
        return teacherTable.find((st) => st.id === findId);
    }
    deleteTeacher(deleteId){
        let deleteTeacher = this.getTeacherById(deleteId);
        let  deletedIndex = teacherTable.findIndex((st) => st === deleteTeacher)
        teacherTable.splice(deletedIndex,1);
    }
    getAllTeacher(){
        return teacherTable;
    }

    getSubjectsByTeacherId(teacherId){
        return this.subjectRepository.getAllSubject().filter(subject => subject.teacherId === teacherId);
    }
}
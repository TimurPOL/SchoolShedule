import { lessonTable } from '../DB/LessonTable.js';
import{SubjectRepository} from './SubjectRepository.js';
import {SchoolClassRepository} from './SchoolClassRepository.js';

export class LessonRepository {
    
    constructor() {
        this.subjectRepository = new SubjectRepository();
        this.schoolClassRepository = new SchoolClassRepository();
    }


    getLessonsAll() {
        return lessonTable;
    }

    getLessonById(findId) {
        return lessonTable.find(lesson => lesson.id === findId);
    }

    getLessonsBySubjectId(subjectId) {
        return lessonTable.filter(lesson => lesson.subjectId === subjectId);
    }


    createLesson(newLesson) {
        lessonTable.push(newLesson);
    }

    deleteLesson(deleteId) {
        const deletedLesson = this.getLessonById(deleteId);
        const deletedIndex = lessonTable.findIndex(lesson => lesson === deletedLesson);

        if (deletedIndex !== -1) {
            lessonTable.splice(deletedIndex, 1);
        }
    }

    updateLessonTopic(id, newTopic) {
        const lesson = this.getLessonById(id);
        if (lesson) {
            lesson.updateTopic(newTopic);
        }
    }

    attachHomeworkToLesson(lessonId, homeworkId) {
        const lesson = this.getLessonById(lessonId);
        if (lesson) {
            lesson.attachHomework(homeworkId);
        }
    }
    
    getSubjectByLessonId(lessonId) {
         const lesson = this.getLessonById(lessonId);
        return this.subjectRepository.getSubjectById(lesson.subjectId); 
    }

    getClassByLessonId(lessonId) {
        const lesson = this.getLessonById(lessonId);
        return this.schoolClassRepository.getClassById(lesson.classId);
    }
}



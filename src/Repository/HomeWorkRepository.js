import { homeworkTable } from '../DB/HomeWorkTable.js';
import { LessonRepository } from './LessonRepository.js';
export class HomeworkRepository {

    constructor() {
        this.lessonRepository = new LessonRepository();
    }

    getHomeworkAll() {
        return homeworkTable;
    }

    getHomeworkById(findId) {
        return homeworkTable.find(hw => hw.id === findId);
    }

    getHomeworkByLessonId(lessonId) {
        return homeworkTable.filter(hw => hw.lessonId === lessonId);
    }

    createHomework(newHomework) {
        homeworkTable.push(newHomework);
    }

    deleteHomeworkById(deleteId) {
        const deletedHomework = this.getHomeworkById(deleteId);
        const deletedIndex = homeworkTable.findIndex(hw => hw === deletedHomework);

        if (deletedIndex !== -1) {
            homeworkTable.splice(deletedIndex, 1);
        }
    }

    updateHomeworkDeadline(id, newDate) {
        const homework = this.getHomeworkById(id);
        if (homework) {
            homework.extendDeadline(newDate);
        }
    }

    updateHomeworkDescription(id, newText) {
        const homework = this.getHomeworkById(id);
        if (homework) {
            homework.updateDescription(newText);
        }
    }

    getLessonByHomeworkId(homeworkId) {
        const homework = this.getHomeworkById(homeworkId);
        return this.lessonRepository.getLessonById(homework.lessonId);
    }

}

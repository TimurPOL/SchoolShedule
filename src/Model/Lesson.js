export class Lesson {
    constructor(id, subjectId,classId, date, topic) {
        this.id = id;
        this.subjectId = subjectId;
        this.classId = classId;
        this.date = date;
        this.topic = topic;
        this.homeworkId = null;
    }

    getShortInfo(){
        return this.topic + " - " + this.date;
    }

    attachHomework(homeworkId){
        this.homeworkId = homeworkId;
    }

    updateTopic(newTopic){
        this.topic = newTopic;
    }
}

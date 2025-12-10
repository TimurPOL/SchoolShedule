class Homework {
    constructor(id,lessonId, dateGiven, dateDue, description) {
        this.id = id;
        this.lessonId = lessonId;
        this.dateGiven = dateGiven;
        this.dateDue = dateDue;
        this.description = description;
    }

    getDescription() {
        return this.description;
    }

    extendDeadline(newDate) {
        this.dateDue = newDate;
    }

    updateDescription(newText) {
        this.description = newText;
    }
}

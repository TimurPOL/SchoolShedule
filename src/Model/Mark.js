class Mark {
    constructor(id, studentId, lessonId, value, comment) {
        this.id = id;
        this.lessonId = studentId;
        this.lessonId = lessonId;
        this.value = value;
        this.comment = comment;
    }

    getInfo() {
        return `${this.value} по предмету ${this.subjectId} (${this.comment})`;
    }

    updateValue(newValue) {
        this.value = newValue;
    }

    updateComment(newComment) {
        this.comment = newComment;
    }
}

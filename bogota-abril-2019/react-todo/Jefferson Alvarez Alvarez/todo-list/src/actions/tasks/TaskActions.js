import API from "../../apis/Task"

export default {
    getAllTasks() {
        API.getAllTasks();
    },
    sendTask(text, stDate, endDate) {
        API.createTask(text, stDate, endDate);
    },
    checkTask(id) {
        API.checkTask(id);
    },
    deleteTask(id) {
        API.deleteTask(id);
    }
}

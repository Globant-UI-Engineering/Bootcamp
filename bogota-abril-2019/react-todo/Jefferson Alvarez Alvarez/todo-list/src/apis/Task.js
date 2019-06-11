import ServerActions from "../actions/tasks/ServerActions"

// Represent "production database" with rawTasks
let rawTasks = [];

export default {
    /* On these function you can make requests to the server */
    getAllTasks() {
        ServerActions.receivedTasks(rawTasks);
    },
    createTask(text, stDate, endDate) {
        if(!!text && !!stDate && !!endDate) {
            let rawTask = {
                id      : new Date().getMilliseconds(),
                text    : text,
                stDate  : stDate,
                endDate : endDate,
                isDone  : false
            };
            ServerActions.receivedOneTask(rawTask);
        }
    },
    checkTask(id) {
        ServerActions.receivedCheckTask(id);
    },
    deleteTask(id) {
        ServerActions.receivedDeletedTask(id);
    }
}
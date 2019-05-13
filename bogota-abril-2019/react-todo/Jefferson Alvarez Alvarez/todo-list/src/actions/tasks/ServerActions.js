import AppDispatcher from "../../dispatcher"
import ActionTypes from "../../constants"

export default {
    receivedTasks(rawTasks) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVED_TASKS,
            rawTasks
        })
    },
    receivedOneTask(rawTask) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVED_ONE_TASK,
            rawTask
        })
    },
    receivedCheckTask(id) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.CHECKED_ONE_TASK,
            id
        })
    },
    receivedDeletedTask(id) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.DELETED_ONE_TASK,
            id
        })
    }
}

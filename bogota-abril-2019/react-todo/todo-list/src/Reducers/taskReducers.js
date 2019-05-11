import { LIST_TASKS, ADD_TASK, DELETE_TASK } from '../Actions/types';


const toDo = {
    tasks: [
        '1 task to do',
        '2 task to do',
        '3 task to do',
        '4 task to do',
        '5 task to do',
    ]
}

const progress = {
    tasks: [
        '1 in progress',
        '2 in progress',
        '3 in progress',
        '4 in progress',
        '5 in progress',
    ]
}

const done = {
    tasks: [
        '1 done',
        '2 done',
        '3 done',
        '4 done',
        '5 done',
    ]
}

const getList = (id) => {
    switch (id) {
        case "1":
            return toDo;
        case "2":
            return progress;
        case "3":
            return done;
        default:
            return toDo;
    }
}
export default function (state = toDo, action) {

    debugger
    switch (action.type) {
        case LIST_TASKS:
            state = getList(action.payload);
            console.log(action.payload);
            return {
                ...state,
                task: []
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task !== action.payload)
            }
        default:
            return state;
    }
}
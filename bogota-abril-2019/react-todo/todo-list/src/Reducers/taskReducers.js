import { GET_TASKS, CREATE_TASK, DELETE_TASK } from '../actions/types';


const initialState = [
    {
        id: "toDoList",
        tasks: ['1 task to do',
            '2 task to do',
            '3 task to do',
            '4 task to do',
            '5 task to do'
        ]
    },
    {
        id: "inProgressList",
        tasks: [
            '1 in progress',
            '2 in progress',
            '3 in progress',
            '4 in progress',
            '5 in progress',
        ]
    },
    {
        id: "doneList",
        tasks: [
            '1 done',
            '2 done',
            '3 done',
            '4 done',
            '5 done',
        ]
    }
]

const getList = (id) => {
    var taskList = initialState.filter(tasks => (tasks.id === id));
    return taskList[0];
}

export default function (state = getList("toDoList"), action) {

    switch (action.type) {
        case GET_TASKS:
            state = getList(action.payload);
            return {
                ...state
            }
        case CREATE_TASK:
            state = getList(action.id);
            state.tasks.push(action.payload)
            return {
                ...state,
                tasks: [...state.tasks]
            }
        case DELETE_TASK:
            state = getList(action.id);
            state.tasks = state.tasks.filter(task => task !== action.payload)
            return {
                ...state,
                tasks: [...state.tasks]
            }
        default:
            return state;
    }
}
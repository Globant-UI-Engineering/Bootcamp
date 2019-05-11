import { LIST_TASKS, ADD_TASK, DELETE_TASK } from '../Actions/types';


const toDo = [
    {
        id: "1",
        tasks: ['1 task to do',
            '2 task to do',
            '3 task to do',
            '4 task to do',
            '5 task to do'
        ]
    },
    {
        id: "2",
        tasks: [
            '1 in progress',
            '2 in progress',
            '3 in progress',
            '4 in progress',
            '5 in progress',
        ]
    },
    {
        id: "3",
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
    var taskList = toDo.filter(tasks => (tasks.id === id));
    return taskList[0];
}

export default function (state = getList("1"), action) {

    switch (action.type) {
        case LIST_TASKS:
            state = getList(action.payload);
            return {
                ...state
            }
        case ADD_TASK:
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
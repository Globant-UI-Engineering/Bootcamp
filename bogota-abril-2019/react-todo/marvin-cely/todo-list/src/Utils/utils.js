const utils = {
    stateToStyles: (taskState) => {
        if (taskState === 'Doing')
            return 'primary';
        else if (taskState === 'Done')
            return 'success';
        else
            return 'secundary';
    },

    priorityToStyles: (priority) => {
        if (priority==='Alta')
            return 'danger';
        else if (priority==='Media')
            return 'warning';
        else
            return 'info';
    },

    nextTaskState: (taskState) => {
        if (taskState === 'Doing')
            return 'Done';
        else
            return 'Doing';
    },
}

export default utils;
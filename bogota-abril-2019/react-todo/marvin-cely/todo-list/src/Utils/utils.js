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
        if (taskState === 'Todo')
            return 'Doing';
        else if (taskState === 'Doing')
            return 'Done';
        else
            return 'NoState';
    },

    // Code taken by https://gist.github.com/gordonbrander/2230317
    uniqueIdGenerator: () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    },
}

export default utils;
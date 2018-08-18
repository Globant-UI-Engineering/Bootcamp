const activeTab = (state = '', action) => {
    switch (action.type) {
        case 'SET_ACTIVE_TAB':
            return action.tabNumber
        default:
            return state
    }
};

export default activeTab;
const defaultState = {
    newsFetched: false,
    newsFetching: false,
    news: [],
};

const news = (state = defaultState, action) => {
    switch (action.type) {
        case 'BEGIN_FETCH_NEWS':
            return Object.assign({
                newsFetching: true,
            }, defaultState);
        case 'ADD_NEWS_LIST':
            return {
                newsFetched: true,
                newsFetching: false,
                news: action.list,
            };
        default:
            return state;
    }
};

export default news;
const defaultState = {
    newsFetched: false,
    newsFetching: false,
    news: [],
};

const news = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_NEWS':
            return {
                newsFetched: true,
                newsFetching: false,
                news: state.news.concat(action.news),
            };
        case 'ADD_NEWS_LIST':
            return {
                newsFetched: true,
                newsFetching: false,
                news: state.news.concat(action.list),
            };
        default:
            return state;
    }
};

export default news;
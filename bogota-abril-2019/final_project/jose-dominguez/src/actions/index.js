export const logIn = (username, motto, look, token) => ({
    type: 'LOG_IN',
    username,
    motto,
    look,
    token
});

export const logOut = () => ({
    type: 'LOG_OUT',
});

export const addNewsList = (list) => ({
    type: 'ADD_NEWS_LIST',
    list,
});

export const beginFetchNews = () => ({
    type: 'BEGIN_FETCH_NEWS',
});

export const setOnlineCount = (count) => ({
    type: 'SET_ONLINE_COUNT',
    count,
});
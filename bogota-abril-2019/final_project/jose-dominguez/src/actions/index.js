export const logIn = (token) => ({
    type: 'LOG_IN',
    token
});

export const logOut = () => ({
    type: 'LOG_OUT',
});

export const userSetData = (username, motto, look) => ({
    type: 'USER_SET_DATA',
    username,
    motto,
    look,
});

export const furnidataSet = furnidata => ({
    type: 'FURNIDATA_SET',
    furnidata
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
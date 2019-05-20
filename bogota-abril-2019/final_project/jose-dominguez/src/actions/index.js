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

export const addNews = (id, title, description, image, link, content) => ({
    type: 'ADD_NEWS',
    news: {
        id,
        title,
        description,
        image,
        link,
        content
    },
});

export const addNewsList = (list) => ({
    type: 'ADD_NEWS_LIST',
    list,
});

export const setOnlineCount = (count) => ({
    type: 'SET_ONLINE_COUNT',
    count,
});
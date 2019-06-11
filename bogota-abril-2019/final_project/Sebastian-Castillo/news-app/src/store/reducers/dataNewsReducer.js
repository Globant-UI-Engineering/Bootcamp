import { actions } from '../actions/actionDataNews';

const initialState = {
  news: [],
  isFetchingNews: false,
  errorNews: false,
  errorText: null,
};

export default function dataNews(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHING_DATA_NEWS: {
      return {
        ...state,
        isFetchingNews: true,
      };
    }
    case actions.SAVE_BOOKMARK: {
      const { id } = action.payload;
      return {
        ...state,
        news: state.news.map((post) => {
          if (post.id == id) {
            return {
              id: post.id,
              author: post.author,
              content: post.content,
              description: post.description,
              publishedAt: post.publishedAt,
              title: post.title,
              url: post.url,
              urlToImage: post.urlToImage,
              isABookmark: !post.isABookmark,
            };
          } else {
            return post;
          }
        }),
      };
    }
    case actions.FETCHING_DATA_NEWS_SUCCESS: {
      const { news } = action.payload;
      const currentNews = news.map((post, index) => {
        return {
          id: index,
          author: post.author,
          content: post.content,
          description: post.description,
          publishedAt: post.publishedAt,
          title: post.title,
          url: post.url,
          urlToImage: post.urlToImage,
          isABookmark: false,
        };
      });
      return {
        ...state,
        isFetchingNews: false,
        errorNews: false,
        news: [...state.news, ...currentNews],
      };
    }

    case actions.FETCHING_DATA_NEWS_PAGE_SUCCESS: {
      const { news } = action.payload;
      let lastIndex = state.news.length;
      const currentNews = news.map((post, index) => {
        return {
          id: lastIndex++,
          author: post.author,
          content: post.content,
          description: post.description,
          publishedAt: post.publishedAt,
          title: post.title,
          url: post.url,
          urlToImage: post.urlToImage,
          isABookmark: false,
        };
      });
      return {
        ...state,
        news: [...state.news, ...currentNews],
      };
    }

    case actions.FETCHING_DATA_NEWS_FAILED: {
      const errorText = action.payload.error;
      return {
        ...state,
        isFetchingNews: false,
        error: true,
        errorText,
      };
    }

    default: {
      return state;
    }
  }
}

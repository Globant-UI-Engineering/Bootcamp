import React from 'react';

import { getNewsPageApi } from '../../api/apiGetNews';

import Item from '../item/Item';
import SkeletonItem from '../skeleton/Skeleton';
import './News.css';

class News1 extends React.Component {
  constructor() {
    super();
    this.page = 1;
    this.state = {
      news: [],
      isFetchingNews: false,
      isAvailablePage: false,
      error: false,
    };
  }

  renderNews = (news, isFetchingNews) => {
    if (isFetchingNews) {
      return <SkeletonItem counts={10} height={105} />;
    } else {
      return news.map((post, index) => {
        return (
          <Item
            key={index.toString()}
            title={post.title}
            description={post.description}
            author={post.author}
            publishedAt={post.publishedAt}
            url={post.url}
            urlToImage={post.urlToImage}
            isABookmark={post.isABookmark}
          />
        );
      });
    }
  };

  reloadData = () => {
    this.setState({
      isFetchingNews: true,
    });
    getNewsPageApi(this.page)
      .then((response) => {
        const currentNews = response[0].articles.map((post) => {
          return {
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
        this.setState({
          news: currentNews,
          isFetchingNews: false,
          error: false,
        });
      })
      .catch((error) => {
        this.setState({
          isFetchingNews: false,
          error: true,
        });
      });
  };

  onScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom && this.state.news.length < 100) {
      this.page += 1;
      console.log(this.page);
      this.setState({
        isAvailablePage: true,
      });
      getNewsPageApi(this.page)
        .then((response) => {
          this.setState({
            news: [...this.state.news, ...response[0].articles],
            error: false,
            isAvailablePage: false,
          });
        })
        .catch((error) => {
          this.setState({
            error: true,
            isAvailablePage: false,
          });
        });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.reloadData();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    const { news, isFetchingNews, error } = this.state;
    return (
      <section className="News">
        <h2 className="News__title">New of technology</h2>
        {error ? (
          <SkeletonItem counts={10} height={105} />
        ) : (
          this.renderNews(news, isFetchingNews)
        )}
      </section>
    );
  }
}

export default News1;

import React from 'react';
import { connect } from 'react-redux';

import { getNews, getNewsPage } from '../../store/actions/actionDataNews';

import Item from '../item/Item';
import SkeletonItem from '../skeleton/Skeleton';
import './News.css';

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
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
            id={index.toString()}
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
    const { getNewsFunction, news } = this.props;
    if (news.length === 0) {
      getNewsFunction(this.state.page);
    }
  };

  onScroll = () => {
    const { getNewsPageFunction } = this.props;
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
    if (scrolledToBottom && this.props.news.length < 100) {
      this.setState({
        page: this.state.page + 1,
      });
      getNewsPageFunction(this.state.page);
    }
  };

  componentDidMount() {
    this.reloadData();
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    const { news, isFetchingNews, error } = this.props;
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

function mapStateToProps(state, props) {
  return {
    news: state.dataNews.news,
    isFetchingNews: state.dataNews.isFetchingNews,
    error: state.dataNews.error,
  };
}

const mapDispatchToProps = (dispatch) => ({
  getNewsFunction: (page) => dispatch(getNews(page)),
  getNewsPageFunction: (page) => dispatch(getNewsPage(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);

import React from 'react';
import { connect } from 'react-redux';

import Item from '../item/Item';
import empty from '../../assets/empty_state.png';
import './Bookmarks.css';

class Bookmarks extends React.Component {
  renderBookmarks = (news) => {
    const bookmarks = news
      .filter((post) => post.isABookmark === true)
      .map((post) => {
        return (
          <Item
            key={post.id.toString()}
            id={post.id}
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

    if (bookmarks.length === 0) {
      return (
        <div className="Bookmarks__empty">
          <img src={empty} alt="empty" />
          <h3>You don't have any bookmark yet.</h3>
        </div>
      );
    } else {
      return bookmarks;
    }
  };

  render() {
    const { news } = this.props;
    return (
      <section className="Bookmarks">
        <h2 className="Bookmarks__title">Your bookmarks</h2>
        {this.renderBookmarks(news)}
      </section>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    news: state.dataNews.news,
  };
}

export default connect(mapStateToProps)(Bookmarks);

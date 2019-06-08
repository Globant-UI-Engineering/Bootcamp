import React from 'react';
import { connect } from 'react-redux';

import { saveBookmark } from '../../store/actions/actionDataNews';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import './Item.css';

class Item extends React.Component {
  monthNumToName = (monthnum) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[monthnum] || '';
  };

  formatDate = (str) => {
    const date = new Date(str);
    const month = this.monthNumToName(date.getMonth());
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    return `${month} ${day} ${year}`;
  };

  onClickBookmark = () => {
    const { saveBookmarkFunction } = this.props;
    saveBookmarkFunction(parseInt(this.props.id));
  };

  render() {
    return (
      <article className="Item__post">
        <div className="Item__post_info">
          <a href={this.props.url} target="__blank">
            <h3 className="Item__post_title">{this.props.title}</h3>
          </a>
          <a href={this.props.url} target="__blank">
            <p className="Item__post_summary">{this.props.description}</p>
          </a>
          <div className="Item__post_author">
            <span className="Item__post_author_name">{this.props.author}</span>
            <span className="Item__post_author_date">
              {this.formatDate(this.props.publishedAt)}
            </span>
            <IconButton
              className="Item__post_button"
              onClick={this.onClickBookmark}
            >
              <span className="Item__post_bookmark">
                {this.props.isABookmark ? (
                  <SvgIcon className="svgIcon-use" width="25" height="25">
                    <path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126c.205.183.52.17.708-.03a.5.5 0 0 0 .118-.285H19V6z" />
                  </SvgIcon>
                ) : (
                  <SvgIcon className="svgIcon-use" width="25" height="25">
                    <path
                      d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                      fillRule="evenodd"
                    />
                  </SvgIcon>
                )}
              </span>
            </IconButton>
          </div>
        </div>
        <div className="Item__post_image">
          <figure className="Item__post_image_continer">
            <img src={this.props.urlToImage} alt="Logo-New" />
          </figure>
        </div>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveBookmarkFunction: (bookmark) => dispatch(saveBookmark(bookmark)),
});

export default connect(
  null,
  mapDispatchToProps
)(Item);

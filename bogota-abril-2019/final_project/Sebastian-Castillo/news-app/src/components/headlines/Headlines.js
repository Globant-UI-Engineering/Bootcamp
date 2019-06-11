import React from 'react';
import { connect } from 'react-redux';

import { getHeadlines } from '../../store/actions/actionDataHeadlines';

import SkeletonItem from '../skeleton/Skeleton';
import ItemHeadlines from '../item-headline/ItemHeadline';
import './Headlines.css';

class Headlines extends React.Component {
  renderHeadLines = (notices, isFetchingHeadlines) => {
    if (isFetchingHeadlines) {
      return <SkeletonItem counts={10} height={105} />;
    } else {
      return notices.map((notice, index) => {
        if (index < 10) {
          return (
            <ItemHeadlines
              key={index.toString()}
              id={index}
              title={notice.title}
              description={notice.description}
              author={notice.author}
              publishedAt={notice.publishedAt}
              url={notice.url}
            />
          );
        } else {
          return null;
        }
      });
    }
  };

  reloadData = () => {
    const { getHeadlinesFunction } = this.props;
    getHeadlinesFunction();
  };

  componentDidMount() {
    this.reloadData();
  }

  render() {
    const { headlines, isFetchingHeadlines, error } = this.props;
    return (
      <aside className="Headlines">
        <h2 className="Headlines__title">Top Headlines</h2>
        {error ? (
          <SkeletonItem counts={10} width={500} height={105} />
        ) : (
          this.renderHeadLines(headlines, isFetchingHeadlines)
        )}
      </aside>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    headlines: state.dataHeadlines.headlines,
    isFetchingHeadlines: state.dataHeadlines.isFetchingHeadlines,
    error: state.dataHeadlines.error,
  };
}

const mapDispatchToProps = (dispatch) => ({
  getHeadlinesFunction: () => dispatch(getHeadlines()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Headlines);

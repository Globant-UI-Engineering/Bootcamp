import React from 'react';
import Skeleton from 'react-loading-skeleton';

import './Skeleton.css';

class SkeletonItem extends React.Component {
  render() {
    const { counts, height } = this.props;
    return (
      <div className="Skeleton">
        <div className="Skeleton__info">
          <Skeleton count={counts} height={height} />
        </div>
      </div>
    );
  }
}

export default SkeletonItem;

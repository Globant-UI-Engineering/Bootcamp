import React from 'react';
import Skeleton from 'react-loading-skeleton';

import './SkeletonProfile.css';

class SkeletonProfile extends React.Component {
  render() {
    return (
      <div className="Skeleton">
        <div className="Skeleton__image">
          <Skeleton
            className="Skeleton__image"
            circle={true}
            height={100}
            width={100}
          />
        </div>
        <div className="Skeleton__info">
          <Skeleton count={6} width={500} />
        </div>
      </div>
    );
  }
}

export default SkeletonProfile;

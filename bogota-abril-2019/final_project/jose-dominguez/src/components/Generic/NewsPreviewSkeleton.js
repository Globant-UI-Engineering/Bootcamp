import React from 'react';

class NewsPreviewSkeleton extends React.Component {
    render() {
        return (
            <section className="news_preview skeleton">
                <div className="img"></div>
                <div>
                    <h2>
                        Trying to load a typical long title...
                    </h2>
                    <p>
                        And there's the description 
                    </p>
                    <span>And a short link</span>
                </div>
            </section>
        );
    }
}

export default NewsPreviewSkeleton;
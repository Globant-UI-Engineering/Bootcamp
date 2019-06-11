import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
    render() {
        const { title, description, content } = this.props.article;
        return (
            <section>
                <div>
                    <h2>
                        {title}
                    </h2>
                    <h4>
                        {description}
                    </h4>
                    <p dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </section>
        );
    }
}

Article.propTypes = {
    article: PropTypes.object
};

export default Article;
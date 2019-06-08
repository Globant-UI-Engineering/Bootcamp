import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ArticleList extends React.Component {

    getItem(article) {
        const { id, title, description, link } = article;

        return (
            <li key={id}>
                <Link to={"/articles/" + link}>
                    {title}
                    <div style={{ fontSize: '0.6em' }}>
                        {description}
                    </div>
                </Link>
            </li>
        );
    }
    render() {
        return (
            <ul>
                {this.props.list.map(article => this.getItem(article))}
            </ul>
        );
    }
}

ArticleList.propTypes = {
    article: PropTypes.array
};

export default ArticleList;
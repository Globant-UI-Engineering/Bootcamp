import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ArticlePreview extends React.Component {
    render() {
        const { title, description, image, link } = this.props.article;
        return (
            <section className="news_preview">
                <img alt="Imagen de la noticia" src={image} />
                <div>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {description}
                    </p>
                    <Link to={"/articles/" + link}>Leer más.</Link>
                </div>
            </section>
        );
    }
}

ArticlePreview.propTypes = {
    article: PropTypes.object
};

export default ArticlePreview;
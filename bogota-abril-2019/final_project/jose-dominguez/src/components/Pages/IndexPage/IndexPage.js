import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../Generic/Footer';
import IndexTeaser from './IndexTeaser';
import ArticlePreviewSkeleton from '../../Generic/Articles/ArticlePreviewSkeleton';
import ArticlePreview from '../../Generic/Articles/ArticlePreview';
import NotLoggedRedirectorContainer from '../../../containers/NotLoggedRedirectorContainer';
import { tryGetLastArticles } from '../../../controllers/BobbaProxy';
import { addNewsList, beginFetchNews } from '../../../actions';
import HeaderContainer from '../../../containers/HeaderContainer';

class IndexPage extends React.Component {
    componentDidMount() {
        const { newsFetched, newsFetching } = this.props.newsContext;
        const { dispatch } = this.props;
        if (!newsFetched && !newsFetching) {
            dispatch(beginFetchNews());
            tryGetLastArticles().then(list => {
                dispatch(addNewsList(list));
            });
        }
    }
    render() {
        const { news } = this.props.newsContext;
        let articlePreview = <ArticlePreviewSkeleton />;
        if (news.length > 0) {
            const currentArticle = news[news.length - 1];
            articlePreview = <ArticlePreview key={currentArticle.id} article={currentArticle} />
        }

        return (
            <div className="index">
                <NotLoggedRedirectorContainer />
                <HeaderContainer />
                <article className="teaser">
                    <IndexTeaser />
                </article>
                <article>
                    {articlePreview}
                </article>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    newsContext: state.news,
});

export default connect(mapStateToProps)(IndexPage);
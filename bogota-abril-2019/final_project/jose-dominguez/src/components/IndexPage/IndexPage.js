import React from 'react';
import { connect } from 'react-redux';
import Footer from '../Generic/Footer';
import IndexTeaser from './IndexTeaser';
import NewsPreviewSkeleton from '../Generic/NewsPreviewSkeleton';
import NewsPreview from '../Generic/NewsPreview';
import NotLoggedRedirectorContainer from '../../containers/NotLoggedRedirectorContainer';
import { tryGetLastNewsFake } from '../../controllers/BobbaProxy';
import { addNewsList } from '../../actions';
import HeaderContainer from '../../containers/HeaderContainer';

class IndexPage extends React.Component {
    componentDidMount() {
        const { newsFetched, newsFetching } = this.props.newsContext;
        const { dispatch } = this.props;
        if (!newsFetched && !newsFetching) {
            tryGetLastNewsFake().then(list => {
                dispatch(addNewsList(list));
            });
        }
    }
    render() {
        const { news } = this.props.newsContext;
        let articlePreview = <NewsPreviewSkeleton />;
        if (news.length > 0) {
            const currentArticle = news[news.length - 1];
            articlePreview = <NewsPreview key={currentArticle.id} article={currentArticle} />
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
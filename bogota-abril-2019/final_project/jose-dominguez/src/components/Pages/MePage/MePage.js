import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../Generic/Footer';
import ArticlePreviewSkeleton from '../../Generic/Articles/ArticlePreviewSkeleton';
import ArticlePreview from '../../Generic/Articles/ArticlePreview';
import Navigator from '../../Navigator/Navigator';
import Radio from './Radio';
import LoggedRedirectorContainer from '../../../containers/LoggedRedirectorContainer';
import { tryGetLastArticles } from '../../../controllers/BobbaProxy';
import { addNewsList, beginFetchNews } from '../../../actions';
import HeaderContainer from '../../../containers/HeaderContainer';
import Me from './Me';

class MePage extends React.Component {

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
        let articlePreview = <><ArticlePreviewSkeleton /><ArticlePreviewSkeleton /></>;

        if (news.length > 0) {
            articlePreview = [];
            for (let i = 0; i < news.length; i++) {
                const currentArticle = news[i];
                articlePreview.push(<ArticlePreview key={currentArticle.id} article={currentArticle} />);
            }
        }

        return (
            <div className="generic">
                <LoggedRedirectorContainer />
                <HeaderContainer/>
                <Navigator />
                <div className="column_container">
                    <article className="left_column user">
                        <Me/>
                    </article>
                    <article className="right_column">
                        <Radio />
                    </article>
                </div>
                <article>
                    <h1 className="blue">Últimas noticias</h1>
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

export default connect(mapStateToProps)(MePage);
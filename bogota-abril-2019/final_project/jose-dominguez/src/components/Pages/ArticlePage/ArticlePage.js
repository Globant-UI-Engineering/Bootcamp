import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../Generic/Footer';
import HeaderContainer from '../../../containers/HeaderContainer';
import ArticlePreviewSkeleton from '../../Generic/Articles/ArticlePreviewSkeleton';
import Navigator from '../../Navigator/Navigator';
import { tryGetLastArticles, tryGetArticle } from '../../../controllers/BobbaProxy';
import { addNewsList, beginFetchNews } from '../../../actions';
import Article from './Article';
import ArticleList from './ArticleList';
import ArticleListSkeleton from './ArticleListSkeleton';

class ArticlePage extends React.Component {

    constructor(props) {
        super(props);

        this.unlistener = () => { };

        this.state = {
            currentArticle: null,
        };
    }

    getIdFromUrl(pathname) {
        const seo = pathname.split('/')[2];
        if (seo != null) {
            const id = seo.split('-')[0];
            return id;
        }
        return null;
    }

    updateCurrentArticle(pathname) {
        const id = this.getIdFromUrl(pathname);
        if (id != null) {
            tryGetArticle(id).then(article => {
                this.setState({ currentArticle: article });
            });
        } else {
            tryGetArticle(0).then(article => {
                this.setState({ currentArticle: article });
            });
        }
    }

    componentWillUnmount() {
        this.unlistener();
    }

    componentDidMount() {
        this.unlistener = this.props.history.listen((location, action) => {
            if (location.pathname.includes("articles")) {
                this.updateCurrentArticle(location.pathname);
            }
        });
        const { newsFetched, newsFetching } = this.props.newsContext;
        const { dispatch } = this.props;
        if (!newsFetched && !newsFetching) {
            dispatch(beginFetchNews());
            tryGetLastArticles().then(list => {
                dispatch(addNewsList(list));
            });
        }
        this.updateCurrentArticle(this.props.location.pathname);
    }

    render() {
        const { news } = this.props.newsContext;

        let articleList = <ArticleListSkeleton />;
        if (news.length > 0) {
            articleList = <ArticleList list={news} />;
        }

        let { currentArticle } = this.state;
        let article = <ArticlePreviewSkeleton />;

        if (currentArticle != null) {
            article = <Article article={currentArticle} />
        }

        return (
            <div className="generic">
                <HeaderContainer />
                <Navigator />
                <article>
                    <h1 className="blue">Noticias</h1>
                    <br />
                    {article}
                </article>

                <article>
                    <h1 className="green">Más noticias</h1>
                    {articleList}
                </article>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    newsContext: state.news,
});

export default connect(mapStateToProps)(ArticlePage);
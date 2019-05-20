import React from 'react';
import { connect } from 'react-redux';
import Footer from '../Generic/Footer';
import HeaderContainer from '../../containers/HeaderContainer';
import NewsPreviewSkeleton from '../Generic/NewsPreviewSkeleton';
import NavigatorContainer from '../../containers/NavigatorContainer';
import { tryGetLastNewsFake, tryGetNewsFake } from '../../controllers/BobbaProxy';
import { addNewsList } from '../../actions';
import Article from './Article';
import ArticleList from './ArticleList';
import ArticleListSkeleton from './ArticleListSkeleton';

class ArticlePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentArticle: null,
        };
    }

    getIdFromUrl() {
        const { pathname } = this.props.location;
        const seo = pathname.split('/')[2];
        if (seo != null) {
            const id = seo.split('-')[0];
            console.log(id);
            return id;
        }
        return null;
    }

    componentDidMount() {
        const { newsFetched, newsFetching } = this.props.newsContext;
        const { dispatch } = this.props;
        if (!newsFetched && !newsFetching) {
            tryGetLastNewsFake().then(list => {
                dispatch(addNewsList(list));
            });
        }

        const id = this.getIdFromUrl();
        if (id != null) {
            tryGetNewsFake(id).then(article => {
                this.setState({ currentArticle: article });
            });
        }
    }

    render() {
        const { news } = this.props.newsContext;

        let articleList = <ArticleListSkeleton />;
        if (news.length > 0) {
            articleList = <ArticleList list={news} />;
        }

        let { currentArticle } = this.state;
        let article = <NewsPreviewSkeleton />;

        if (currentArticle != null) {
            article = <Article article={currentArticle} />
        }

        return (
            <div className="generic">
                <HeaderContainer />
                <NavigatorContainer />
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
import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../Generic/Footer';
import Navigator from '../../Navigator';
import HeaderContainer from '../../../containers/HeaderContainer';
import './table.css';
import { furnidataSet } from '../../../actions';
import { fetchFurnidata, getImageUrl } from '../../../controllers/FurnitureProxy';
import SearchFurni from './SearchFurni';
import DisplayFurni from './DisplayFurni';

const initialState = {
    itemClassname: '',
    itemName: '',
    itemDescription: '',
};

class CataloguePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        const { furniContext, dispatch } = this.props;
        if (!furniContext.fetched) {

            fetchFurnidata().then(response => {
                dispatch(furnidataSet(response));
            });
        }
    }

    handleSelectItem = itemData => {
        this.setState({
            itemClassname: itemData.classname,
            itemName: itemData.name,
            itemDescription: itemData.description,
        });
    }

    render() {
        const { fetched, furnidata } = this.props.furniContext;
        const { itemClassname, itemName, itemDescription } = this.state;

        let imageUrl = '/web-gallery/images/furni_placeholder.png';

        let searchContainer = (
            <center>
                <img src="/web-gallery/images/loading.gif" alt="Cargando..." />
                <p>Cargando...</p>
            </center>
        );
        if (fetched) {
            searchContainer = <SearchFurni onSelectItem={this.handleSelectItem} furnidata={furnidata} />;
        }
        console.log(itemClassname);
        if (itemClassname !== '') {
            imageUrl = getImageUrl(itemClassname);
        }

        return (
            <div className="generic furnifinder form">
                <HeaderContainer />
                <Navigator />
                <div className="column_container">
                    <article className="left_column">
                        {searchContainer}
                    </article>
                    <article className="right_column">
                        <DisplayFurni image={imageUrl} name={itemName} description={itemDescription} />
                    </article>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    furniContext: state.furni,
});

export default connect(mapStateToProps)(CataloguePage);
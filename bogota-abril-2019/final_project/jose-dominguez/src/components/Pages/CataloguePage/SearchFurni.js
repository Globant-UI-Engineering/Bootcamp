import React from 'react';
import PropTypes from 'prop-types';
import { searchOnFurnidata } from '../../../controllers/FurnitureProxy';
const initialState = {
    search: '',
    suggestions: [],
};

class SearchFurni extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleInputChange = event => {
        const { value } = event.target;
        const { furnidata } = this.props;

        this.setState({
            search: value.toLowerCase(),
            suggestions: searchOnFurnidata(furnidata, value),
        });
    }

    getHighlightedName = (rawName, search) => {
        const name = rawName.toString();
        const index = name.toLowerCase().indexOf(search);
        if (index === -1 || search.length === 0) {
            return name;
        }
        const before = name.slice(0, index);
        const mid = name.slice(index, index + search.length);
        const after = name.slice(index + search.length);

        return (<>{before}<strong>{mid}</strong>{after}</>);
    };

    handleSelectItem = itemData => event => {
        const { onSelectItem } = this.props;
        if (onSelectItem != null) {
            onSelectItem(itemData);
        }
    }

    renderRow = (itemData, index, search) => {
        const { classname, name, description } = itemData;
        return (
            <tr key={index} onClick={this.handleSelectItem(itemData)}>
                <td>{this.getHighlightedName(classname, search)}</td>
                <td>{this.getHighlightedName(name, search)}</td>
                <td>{this.getHighlightedName(description, search)}</td>
            </tr>
        );
    }

    render() {
        const { search, suggestions } = this.state;

        const items = suggestions.map((part, index) => {
            return this.renderRow(part, index, search);
        });

        return (
            <>
                <h1 className="blue">Catálogo de objetos</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="input_group">
                        <label htmlFor="search">Buscar: </label>
                        <input id="search" name="search" type="text" aria-label="Buscar" placeholder="shelves_norja"
                            onChange={this.handleInputChange} value={search} />
                        <p>Puedes buscar un objeto por su nombre</p>
                    </div>
                </form>

                <h2>Resultado de la búsqueda:</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </>
        );
    }
}

SearchFurni.propTypes = {
    furnidata: PropTypes.object,
    onSelectItem: PropTypes.func
};

export default SearchFurni;
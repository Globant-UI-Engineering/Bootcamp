import React from 'react';
import PropTypes from 'prop-types';
import { searchOnFurnidata } from '../../../controllers/FurnitureProxy';

const ROWS_PER_PAGE = 10;

const initialState = {
    search: '',
    suggestions: [],
    page: 0,
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

    goToFirstPage = event => {
        event.preventDefault();
        this.setState({
            page: 0,
        });
    }

    goToLastPage = event => {
        event.preventDefault();
        const { suggestions } = this.state;
        const lastPage = Math.ceil(suggestions.length / ROWS_PER_PAGE) - 1;

        this.setState({
            page: lastPage,
        });
    }

    goToNextPage = event => {
        event.preventDefault();
        const { suggestions, page } = this.state;
        const lastPage = Math.ceil(suggestions.length / ROWS_PER_PAGE) - 1;

        this.setState({
            page: Math.min(lastPage, page + 1),
        });
    }

    goToPreviousPage = event => {
        event.preventDefault();
        const { page } = this.state;

        this.setState({
            page: Math.max(0, page - 1),
        });
    }

    render() {
        const { search, suggestions, page } = this.state;

        const first = page * ROWS_PER_PAGE;
        const total = suggestions.length;
        const last = Math.min(page * ROWS_PER_PAGE + ROWS_PER_PAGE, total);
        const items = suggestions.slice(first, last).map((part, index) => {
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
                <p className='pages'>{first + 1} - {last + 1} de {total}</p>
                <ul>
                    <li onClick={this.goToFirstPage}>&lt;&lt;</li>
                    <li onClick={this.goToPreviousPage}>&lt;</li>

                    <li onClick={this.goToNextPage}>&gt;</li>
                    <li onClick={this.goToLastPage}>&gt;&gt;</li>
                </ul>
            </>
        );
    }
}

SearchFurni.propTypes = {
    furnidata: PropTypes.object,
    onSelectItem: PropTypes.func
};

export default SearchFurni;
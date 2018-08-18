import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCard} from '../actions';
import {Row} from 'react-bootstrap';

class CardDescription extends Component{
    componentDidMount(){
        const idName = this.props.match.params.idName;
        this.props.fetchCard(idName);
    }
    render(){
        const {card} = this.props;
        if(!card){
            return <div>Loading...</div>
        }
        return(
            <div className="card_description">
            <Row className="header_description">
                <h2>Card Description!</h2>
                <Link to="/" className="btn btn-lg"><h4>Back!</h4></Link>
            </Row>
            <Row className="table_description">
                <div className="col-md-4 card_image">
                        <img src={`http://www.clashapi.xyz/images/cards/${card.idName}.png`} alt={card.name} />
                </div>
                
                <div className="col-md-8 card_text">
                    <table className="table">
                    <caption>{card.name}</caption>
                        <tbody>
                            <tr>
                                <td >Rarity</td>
                                <td>{card.rarity}</td>
                            </tr>
                            <tr>
                                <td >Type</td>
                                <td>{card.type}</td>
                            </tr>
                            <tr>
                                <td >Elixir cost</td>
                                <td>{card.elixirCost}</td>
                            </tr>
                            <tr>
                                <td >Description</td>
                                <td>{card.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </Row>

            </div>
        );
    }
}

function mapStateToProps({cards}, ownProps){
    return {card: cards[ownProps.match.params.idName]}
}

export default connect(mapStateToProps, {fetchCard})(CardDescription);
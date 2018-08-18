import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchCards} from '../actions';
import {Row, Col} from 'react-bootstrap';


class CardList extends Component {
	componentDidMount(){
		this.props.fetchCards();
	}

	renderCards(){
		return _.map(this.props.cards, card =>{
			return (
				<Col xs={12} sm={6} md={3} key={card.idName} className="card">
				<Link to={`/cards/${card.idName}`}>
					<img  src={`http://www.clashapi.xyz/images/cards/${card.idName}.png`} alt={card.name}/>
			   		 <div to={`/cards/${card.idName}`} className="btn btn-lg"><h4>{card.name}</h4></div>
				</Link>
			    </Col>	
			)
		});
	}
	render(){
		return (			
			  <Row className="card_list">
				  <h2>Select one card to know more</h2>
				 {this.renderCards()} 
			   </Row>	
		);
	}	
}

function mapStateToProps(state){
	return {cards : state.cards};
}

export default connect(mapStateToProps, {fetchCards})(CardList);
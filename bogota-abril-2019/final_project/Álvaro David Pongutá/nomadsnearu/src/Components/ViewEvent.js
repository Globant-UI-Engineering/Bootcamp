import React from 'react';
import '../App.scss';
import firebase from '../Firebase';

class ListActivities extends React.Component {

    printActivities(){
        if(this.props.objectActivities !== undefined){
                return Object.values(this.props.objectActivities).map(activity => 
                    <li>{activity}</li>
            );
        }
    }

    render () {  
        return (
            <ol>
                {this.printActivities()}
            </ol>
        );
    }
}

class ViewEvent extends React.Component {

    state = {
        actualEvent: ''
    };

    componentDidMount() {
        firebase.database().ref('/events/' + this.props.match.params.eventId).once('value').then(event => this.setState({
            actualEvent: event.val()
        }))
    }

    render () {  
        return (
            <section>
                <article className="App-row-elements">
                    <h2 className="home">{this.state.actualEvent.name}</h2>
                </article>
                <article className="App-row-elements">
                    <img className="image-left image-event" src={this.state.actualEvent.ulrImage} alt="Event Image"/>
                    <article className="App-column-elements App-center-elements App-font-event">
                        <div className="center-text">
                            <h3>Fecha</h3>{this.state.actualEvent.date}
                        </div>
                        <div className="center-text">
                            <h3>Dirección</h3>{this.state.actualEvent.address}
                        </div>
                        <div className="center-text">
                            <h3>Descripción</h3>{this.state.actualEvent.description}
                        </div>
                        <div className="center-text">
                            <h3>Tipo</h3>{this.state.actualEvent.type}
                        </div>
                        <div className="center-text">
                            <h3>Número de asistentes</h3>{`${this.state.actualEvent.numberOfRemainingAsisstants}/${this.state.actualEvent.numberOfTotalAssistants}`}
                        </div>
                    </article>
                    
                </article>
            </section>
        );
    }
}

export default ViewEvent;
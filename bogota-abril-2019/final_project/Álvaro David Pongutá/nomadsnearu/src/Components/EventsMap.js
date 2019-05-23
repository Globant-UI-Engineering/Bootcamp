import React from 'react';
import '../App.scss';
import MapContainer from '../Google/Map';

class EventsMap extends React.Component {

    render () {
        return (
            <section>
                <article className="App-row-elements">
                    <h2>Mapa de eventos:</h2>
                </article>
                <article className="App-column-elements">
                  <MapContainer/>
                </article>
            </section>
        );
    }
  }

  export default EventsMap;
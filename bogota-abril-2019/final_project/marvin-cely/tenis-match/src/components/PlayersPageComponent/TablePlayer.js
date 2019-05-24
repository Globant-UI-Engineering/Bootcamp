import React from 'react';
import '../../css/TablePlayer.css';
import { observer } from 'mobx-react';
import playerListHeader from './playersTableHead';
import utils from '../../utils/utils';


const TablePlayer = observer(
  class TablePlayer extends React.Component {
    render() { 
      const tableHeader = (headerList) => {
        return(
          <section className="row" role="row">
            <h4 className="col-md-3" role="columnheader">{headerList.name}</h4>
            <h4 className="col-md-3" role="columnheader">{headerList.nationality}</h4>
            <h4 className="col-md-3" role="columnheader">{headerList.age}</h4>
            <h4 className="col-md-3" role="columnheader">{headerList.ranking}</h4>
          </section>
        );
      }

      const playersList = this.props.players.map(({id, name, nationality, birthDate, ranking}) => {
        return (
          <section className="row" key={id} role="row">
            <span className="col-md-3" role="cell">
              {name}
            </span>
            <span className="col-md-3" role="cell">
              {nationality}
            </span>
            <span className="col-md-3" role="cell">
              {utils.getAge(birthDate)}
            </span>
            <span className="col-md-3" role="cell">
              {ranking}
            </span>
          </section>
        );
      });

      return(
        <React.Fragment>        
          <section role="table" 
            aria-label="Estadisticas de Jugadores" 
            summary="Tabla de los jugadores y sus esetadísticas">
              <section className="shadow-sm p-2 mb-1 bg-white rounded-pill d-none d-md-block">
                {tableHeader(playerListHeader)}
              </section>
              {playersList}
          </section>
        </React.Fragment>
      );
    }
  }
);

export default TablePlayer;
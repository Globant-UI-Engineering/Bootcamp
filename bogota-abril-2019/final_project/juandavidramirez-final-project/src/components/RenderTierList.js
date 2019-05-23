import React from "react";

import Summoner from "./Summoner";
import challenger from "../../public/images/challenger.png";

class RenderTierList extends React.Component {
  handleOnKeyUp = event => {
    event.preventDefault();

    var input, filter, table, tr, td, txtValue;
    let i;

    input = document.getElementById("FilterEntriesInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tierSummonersTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  render() {
    return (
      <div className="tier-route-container">
        <img id="leagueIcon" alt="League icon" src={challenger} />
        <section>
          <header>
            <h2>Summoners</h2>
          </header>
          <div>
            <div className="input-container">
              <input
                type="text"
                id="FilterEntriesInput"
                onKeyUp={this.handleOnKeyUp}
                placeholder="Search for summoner names..."
                title="Type in a summoner name"
              />
            </div>
            <table id="tierSummonersTable" className="table">
              <thead>
                <tr id="table-head-row" className="header">
                  <th>#</th>
                  <th>summoner</th>
                  <th>victory percentage</th>
                  <th>hot streak</th>
                  <th>veteran</th>
                  <th>fresh blood</th>
                  <th>lp</th>
                </tr>
              </thead>
              <tbody>
                {this.props.summoners.map((value, index) => {
                  return (
                    <Summoner
                      key={index}
                      rankNumber={value.rankNumber}
                      name={value.summonerName}
                      leaguePoints={value.leaguePoints}
                      wins={value.wins}
                      losses={value.losses}
                      hotStreak={value.hotStreak}
                      veteran={value.veteran}
                      freshBlood={value.freshBlood}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}

export default RenderTierList;

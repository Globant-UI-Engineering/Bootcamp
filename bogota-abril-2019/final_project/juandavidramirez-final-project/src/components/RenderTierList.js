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
      td = tr[i].getElementsByTagName("td")[0];
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
            <input
              type="text"
              id="FilterEntriesInput"
              onKeyUp={this.handleOnKeyUp}
              placeholder="Search for summoner names..."
              title="Type in a summoner name"
            />
            <table id="tierSummonersTable">
              <tbody>
                <tr className="header-table">
                  <th>Name</th>
                  <th>Wins</th>
                  <th>Losses</th>
                  <th>League Points</th>
                </tr>
                {this.props.summoners.map((value, index) => {
                  return (
                    <Summoner
                      key={index}
                      name={value.summonerName}
                      leaguePoints={value.leaguePoints}
                      wins={value.wins}
                      losses={value.losses}
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

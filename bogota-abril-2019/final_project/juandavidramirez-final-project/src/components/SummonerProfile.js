import React from "react";
import { Paper } from "@material-ui/core";
import { apiStaticUrl } from "../utils/Constants/urls";
import { getSummonerMatches } from "../utils/api";
import Match from "./Match";

class SummonerProfile extends React.Component {
  state = {
    loading: true
  };
  getSummoner = () => {
    var callback = {
      onSuccess: response => {
        console.log(response.data);
      },
      onFailed: error => {
        console.log(error);
      }
    };

    getSummonerById(this.props.id, callback);
  };

  componentDidMount() {
    var callback = {
      onSuccess: response => {
        this.setState({ loading: false, matches: response.data });
      },
      onFailed: error => {
        console.log(error);
      }
    };
    if (this.props.accountId) {
      getSummonerMatches(20, this.props.accountId, callback);
    } else {
      this.getSummoner();
    }
  }
  render() {
    const { loading, matches } = this.state;
    const {
      id,
      accountId,
      puuid,
      name,
      profileIconId,
      summonerLevel,
      revisionDate
    } = this.props;

    const profileIconUrl =
      apiStaticUrl.img + "/profileicon/" + profileIconId + ".png";
    return (
      <Paper className="summoner-info-paper-container">
        {" "}
        {accountId && (
          <React.Fragment>
            <img
              className="profile-icon-image"
              src={profileIconUrl}
              alt="Summoner Profile Icon"
            />
            <h2>{name}</h2>
            <p>
              level {summonerLevel}, # of played games for 3 years{" "}
              {matches ? matches.totalGames : "have not played"}
            </p>
            <div className="additional-info">
              {matches && (
                <div>
                  <h3>Recent Matches</h3>
                  <ul className="matches-list">
                    {matches.matches.map((value, index) => {
                      return (
                        <li key={index}>
                          <Match
                            platformId={value.platformId}
                            gameId={value.gameId}
                            champion={value.champion}
                            queue={value.queue}
                            season={value.season}
                            timestamp={value.timestamp}
                            role={value.role}
                            lane={value.lane}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>{" "}
          </React.Fragment>
        )}
      </Paper>
    );
  }
}

export default SummonerProfile;

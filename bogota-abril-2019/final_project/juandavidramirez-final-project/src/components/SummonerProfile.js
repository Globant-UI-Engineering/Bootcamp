import React from "react";
import { Paper } from "@material-ui/core";
import { apiStaticUrl } from "../utils/Constants/urls";
import { getSummonerMatches, getSummonerById, getSummoner } from "../utils/api";
import Match from "./Match";
import Loading from "./Loading";

class SummonerProfile extends React.Component {
  state = {
    loading: true
  };

  UNSAFE_componentWillReceiveProps(newProps) {
    const upperNewProps = newProps.name.toUpperCase();
    const upperOldProps = this.props.name.toUpperCase();
    if (!(upperNewProps === upperOldProps)) {
      this.setState({ loading: true, matches: null, profileInfo: null });
    }
  }

  componentDidUpdate() {
    if (!this.state.profileInfo && this.state.loading) {
      this.handleProfileRequest();
    }
  }

  handleProfileRequest = () => {
    var callback = {
      onSuccess: response => {
        this.setState({ profileInfo: response.data }, () => {
          var callback = {
            onSuccess: response => {
              this.setState({ loading: false, matches: response.data });
            },
            onFailed: error => {
              console.log(error);
            }
          };
          getSummonerMatches(20, this.state.profileInfo.accountId, callback);
        });
      },
      onFailed: error => {
        this.setState({ loading: false });
      }
    };
    getSummoner(this.props.name, callback);
  };

  componentDidMount() {
    this.handleProfileRequest();
  }
  render() {
    const { loading, matches, profileInfo } = this.state;

    const profileIconUrl = profileInfo
      ? apiStaticUrl.img + "/profileicon/" + profileInfo.profileIconId + ".png"
      : "";
    return loading ? (
      <Loading name="Summoner profile" />
    ) : !profileInfo ? (
      <h1>This summoner doesnt exist</h1>
    ) : (
      <Paper className="summoner-info-paper-container">
        {" "}
        <img
          className="profile-icon-image"
          src={profileIconUrl}
          alt="Summoner Profile Icon"
        />
        <h2>{profileInfo.name}</h2>
        <p>
          level {profileInfo.summonerLevel}, # of played games for 3 years{" "}
          {matches.totalGames}
        </p>
        <div className="additional-info">
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
        </div>{" "}
        )
      </Paper>
    );
  }
}

export default SummonerProfile;

import React from "react";
import { Paper } from "@material-ui/core";
import { apiStaticUrl } from "../utils/Constants/urls";
import { getSummonerMatches, getSummonerById, getSummoner } from "../utils/api";
import Match from "./Match";
import Loading from "./Loading";
import ErrorPanel from "./ErrorPanel";
import { findDOMNode } from "react-dom";

class SummonerProfile extends React.Component {
  state = {
    loading: true
  };

  UNSAFE_componentWillReceiveProps(newProps) {
    const upperNewProps = newProps.name.toUpperCase();
    const upperOldProps = this.props.name.toUpperCase();
    if (!(upperNewProps === upperOldProps)) {
      this.setState({
        loading: true,
        matches: null,
        profileInfo: null,
        error: null
      });
    }
  }

  componentDidUpdate() {
    if (!this.state.profileInfo && this.state.loading && !this.state.error) {
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
              this.setState({ error: error.response });
            }
          };
          getSummonerMatches(20, this.state.profileInfo.accountId, callback);
        });
      },
      onFailed: error => {
        this.setState({ error: error.response });
      }
    };
    getSummoner(this.props.name, callback);
  };

  componentDidMount() {
    this.handleProfileRequest();
  }
  render() {
    const { loading, matches, profileInfo, error } = this.state;

    const profileIconUrl = profileInfo
      ? apiStaticUrl.img + "/profileicon/" + profileInfo.profileIconId + ".png"
      : "";

    return error ? (
      <ErrorPanel error={error} />
    ) : loading ? (
      <Loading name="summoner profile" />
    ) : (
      <Paper className="summoner-info-container">
        <img src={profileIconUrl} alt="Summoner Profile Icon" />
        <h2>{profileInfo.name}</h2>
        <p>level {profileInfo.summonerLevel}</p>
        <section className="additional-info">
          <Paper>
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
          </Paper>
        </section>
      </Paper>
    );
  }
}

export default SummonerProfile;

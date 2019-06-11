import React from "react";
import { Card } from "@material-ui/core";
import { Link } from "@reach/router";

import { apiStaticUrl } from "../../utils/Constants/urls";
import { getChampions } from "../../utils/api";
import Loading from "../Loading/Loading";
import { seasons, queues, serviceProxies } from "../../utils/Constants/game";
import ErrorPanel from "../ErrorPanel/ErrorPanel";

import "./Match.css";

class Match extends React.Component {
  state = { loading: true };

  getChampionInfo(champions) {
    var championInfo;
    var champion = Object.keys(champions).find(champion => {
      return champions[champion].key == this.props.champion;
    });
    championInfo = champions[champion];
    return championInfo;
  }

  componentDidMount() {
    const { platformId, queue, season, timestamp, role, lane } = this.props;
    const seasonValue = seasons[season];
    const queueValue = queues[queue] ? queues[queue] : queue;
    const platformValue = serviceProxies[platformId];
    const realDate = new Date(timestamp).toDateString();
    const roleValue = role === "NONE" ? null : role;
    const laneValue = lane === "NONE" ? null : lane;
    var callback = {
      onSuccess: response => {
        this.setState({
          championInfo: this.getChampionInfo(response.data.data),
          seasonValue,
          queueValue,
          platformValue,
          realDate,
          roleValue,
          laneValue,
          loading: false
        });
      },
      onFailed: error => {
        this.setState({ error: error.response });
      }
    };
    getChampions(callback);
  }
  render() {
    const {
      championInfo,
      loading,
      seasonValue,
      queueValue,
      platformValue,
      realDate,
      roleValue,
      laneValue,
      error
    } = this.state;

    const championImgUrl = championInfo
      ? apiStaticUrl.img + "/champion/" + championInfo.image.full
      : "";

    return loading ? (
      <Loading name="loading champion" />
    ) : error ? (
      <ErrorPanel error={error} />
    ) : (
      <Card className="flex-row-match-card">
        <Link to={`/champion/${championInfo.id}`}>
          <img
            src={championImgUrl}
            alt={`The champion used was ${championInfo.name}`}
          />
        </Link>

        <h4>{seasonValue}</h4>

        <article className="details-panel">
          <h5>{`${queueValue.map}, ${queueValue.description}`}</h5>
          <dl>
            <div>
              <dt>server</dt>
              <dd>{platformValue.region}</dd>
            </div>
            <div>
              <dt>date</dt>
              <dd>{realDate}</dd>
            </div>

            {roleValue && (
              <div>
                <dt>role</dt>
                <dd>{roleValue}</dd>
              </div>
            )}

            {laneValue && (
              <div>
                <dt>lane</dt>
                <dd>{laneValue}</dd>
              </div>
            )}
          </dl>
        </article>
      </Card>
    );
  }
}

export default Match;

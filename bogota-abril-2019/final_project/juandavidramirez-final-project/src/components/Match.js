import React from "react";
import { Card, Paper } from "@material-ui/core";
import { apiStaticUrl } from "../utils/Constants/urls";
import { getChampions } from "../utils/api";
import { Link } from "@reach/router";
import Loading from "./Loading";
import { seasons, queues, serviceProxies } from "../utils/Constants/game";

class Match extends React.Component {
  state = { loading: true };

  getChampionInfo(champions) {
    var championInfo;
    var champion = Object.keys(champions).find(champion => {
      return champions[champion].key == this.props.champion;
    });

    championInfo = champions[champion];
    console.log(champion);
    return championInfo;
  }

  componentDidMount() {
    const {
      platformId,
      gameId,
      champion,
      queue,
      season,
      timestamp,
      role,
      lane
    } = this.props;
    console.log(queue);
    const seasonValue = seasons[season];
    const queueValue = queues[queue] ? queues[queue] : queue;
    const platformValue = serviceProxies[platformId];
    const realDate = new Date(timestamp).toDateString();
    const roleValue = role === "NONE" ? null : role;
    const laneValue = lane === "NONE" ? null : lane;
    var callback = {
      onSuccess: response => {
        //console.log(response.data.data);
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
        console.log(error);
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
      laneValue
    } = this.state;

    const { champion } = this.props;

    const championImgUrl = championInfo
      ? apiStaticUrl.img + "/champion/" + championInfo.image.full
      : "";

    //const roleValue = ;

    return !loading ? (
      <Card className="flex-row-match-card">
        <Link to={`/champion/${championInfo.id}`}>
          <img src={championImgUrl} alt={`The champion used was ${champion}`} />
        </Link>

        <h4>{seasonValue}</h4>

        <article className="details-panel flex column-flex flex-center">
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
    ) : (
      <Loading name="loading champion" />
    );
  }
}

export default Match;

import React from "react";
import { Card } from "@material-ui/core";
import { apiStaticUrl } from "../utils/Constants/urls";
import { getChampions } from "../utils/api";
import { Link } from "@reach/router";
import Loading from "./Loading";

class Match extends React.Component {
  state = {};

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
    var callback = {
      onSuccess: response => {
        //console.log(response.data.data);
        this.setState({
          championInfo: this.getChampionInfo(response.data.data)
        });
      },
      onFailed: error => {
        console.log(error);
      }
    };
    getChampions(callback);
  }
  render() {
    const { championInfo } = this.state;
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

    const championImgUrl = championInfo
      ? apiStaticUrl.img + "/champion/" + championInfo.image.full
      : "";
    return championInfo ? (
      <Card className="flex-row-match-card">
        <Link to={`/champion/${championInfo.id}`}>
          <img src={championImgUrl} alt={`The champion used was ${champion}`} />
        </Link>

        <p>
          season {season}, gameId {gameId}, queue {queue}, main role {role},
          lane {lane}
        </p>
      </Card>
    ) : (
      <Loading name="loading champion" />
    );
  }
}

export default Match;

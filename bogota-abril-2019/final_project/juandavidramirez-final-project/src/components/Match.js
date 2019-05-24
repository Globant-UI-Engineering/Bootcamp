import React from "react";
import { Card } from "@material-ui/core";
import { apiStaticUrl } from "../utils/Constants/urls";

class Match extends React.Component {
  render() {
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

    const championImgUrl = ""; /*apiStaticUrl.img + */
    return (
      <Card className="flex-row-match-card">
        <img src={championImgUrl} alt={`The champion used was ${champion}`} />
        <p>
          season {season}, gameId {gameId}, queue {queue}, main role {role},
          lane {lane}
        </p>
      </Card>
    );
  }
}

export default Match;

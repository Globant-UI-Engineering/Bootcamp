import React from "react";

import { getChampion } from "../../utils/api";
import Loading from "../Loading/Loading";
import RenderChampionDetail from "../RenderChampionDetail/RenderChampionDetail";
import ErrorPanel from "../ErrorPanel/ErrorPanel";

class ChampionDetail extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { id } = this.props;

    var callback = {
      onSuccess: response => {
        this.setState({ loading: false, champion: response.data });
      },
      onFailed: error => {
        this.setState({ error: error.response });
      }
    };

    getChampion(id, callback);
  }
  render() {
    const { loading, champion, error } = this.state;

    if (!champion) {
      var errorChampion = {
        status: 404,
        data: { status: { message: "Champion not found" } }
      };
    }

    return loading ? (
      <Loading name="champion detail" />
    ) : !champion ? (
      <ErrorPanel error={errorChampion} />
    ) : error ? (
      <ErrorPanel error={error} />
    ) : (
      <RenderChampionDetail
        version={champion.version}
        id={champion.id}
        numberKey={champion.key}
        name={champion.name}
        title={champion.title}
        blurb={champion.blurb}
        info={champion.info}
        image={champion.image}
        tags={champion.tags}
        partype={champion.partype}
        stats={champion.stats}
      />
    );
  }
}

export default ChampionDetail;

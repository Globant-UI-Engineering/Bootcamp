import React from "react";
import { getChampion } from "../utils/api";
import Loading from "./Loading";
import RenderChampionDetail from "./RenderChampionDetail";

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
        console.log(error);
      }
    };

    getChampion(id, callback);
  }
  render() {
    const { loading, champion } = this.state;
    return loading ? (
      <Loading />
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

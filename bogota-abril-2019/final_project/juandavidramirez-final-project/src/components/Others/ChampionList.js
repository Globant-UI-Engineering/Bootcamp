import React from "react";

import { getChampions } from "../../utils/api.js";
import Loading from "../Loading/Loading";
import RenderChampionList from "../RenderChampionList/RenderChampionList";
import ErrorPanel from "../ErrorPanel/ErrorPanel";
class ChampionList extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    var callback = {
      onSuccess: response => {
        this.setState({ champions: response.data.data, loading: false });
      },
      onFailed: error => {
        this.setState({ error: error });
      }
    };

    getChampions(callback);
  }

  render() {
    const { champions, loading, error } = this.state;

    return loading ? (
      <Loading name="Champions" />
    ) : error ? (
      <ErrorPanel error={error} />
    ) : (
      <RenderChampionList champions={champions} />
    );
  }
}
export default ChampionList;

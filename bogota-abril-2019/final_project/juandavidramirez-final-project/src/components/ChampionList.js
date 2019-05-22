import React from "react";
import { getChampions } from "../utils/api.js";
import Loading from "./Loading";
import RenderChampionList from "./RenderChampionList";
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
        console.error(error);
      }
    };

    getChampions(callback);
  }

  render() {
    const { champions, loading } = this.state;

    return loading ? (
      <Loading name="Champions" />
    ) : (
      <RenderChampionList champions={champions} />
    );
  }
}
export default ChampionList;

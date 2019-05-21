import React from "react";
import Loading from "../../../App/Loading";
import RenderChampion from "./RenderChampion";

class Champion extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  render() {
    const { loading } = this.state;

    const { name, image } = this.props;

    return loading ? (
      <Loading name="Champion" />
    ) : (
      <RenderChampion name={name} image={image} />
    );
  }
}

export default Champion;

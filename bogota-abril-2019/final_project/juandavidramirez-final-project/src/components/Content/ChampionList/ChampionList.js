import React from "react";
import "../ChampionList/ChampionList.css";
import {getChampions} from "../../../utils/api.js";
import Champion from "../../Champion/Champion";
class ChampionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champions: [],
      loading: true
    };
  }

  componentDidMount(){
    var callback = {
      onSuccess: (response) => {
        this.setState({champions:response.data.data, loading:false});
      },
      onFailed: (error) =>{
        console.error(error);
      }
    };

      getChampions(callback);
    
  }

  render() {
    if(this.state.loading){
      return <h1>Is Loading ...</h1>
    }

    const { champions } = this.state;

    return (
      <div>
        {Object.keys(champions).map(key => (
              <Champion
                key
                name = {key}
                image = {champions[key].image.full}
              />
      
        ))}
      </div>
    );
  }
}
export default ChampionList;

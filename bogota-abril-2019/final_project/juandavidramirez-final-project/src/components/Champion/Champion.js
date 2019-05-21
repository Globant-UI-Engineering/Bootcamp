import React from "react";

class Champion extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            imgLink : ""
        };
    }

    componentDidMount(){
        this.setState({imgLink: "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/"+this.props.image});
    }

    render(){
        console.log(this.props.name);
        return(
            <div>
                <h2>{this.props.name}</h2>
                <img alt={this.props.name} src={this.state.imgLink}/>
            </div>
        );
    }
}

export default Champion;
import React from 'react';
import { db } from '../../firebase';

class PublicProjectsList extends React.Component {

  joinProject(projectId){
    db.joinProject(projectId,this.props.authUserId,this.props.authUserName);
  }

  createProjectCards() {
     const projectComponent = this.props.projects.map((project,i) =>{
       return(
         <div  className="Project-card" key={i}>
           <h3>{project.name} </h3>
           <p>{project.description}</p>
           <p>{"Estimated time: " + project.estimatedTime + " hours"}</p>
           <p>{"Published by: " + project.creatorName}</p>
           <button className="Button-update" onClick={ () => this.joinProject(project.key) }>
             Join
           </button>
         </div>
       )
     })
     return projectComponent;
  }

  render () {
    return (
      <React.Fragment>
        <h2 className="App-title">Public Projects</h2>
        {this.createProjectCards()}
        <br/><br/>
      </React.Fragment>
    );
  }

}

export default PublicProjectsList;

import React from 'react';
import AddProjectForm from './AddProjectForm.js';

class MyProjectsList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isNewClicked: false,
    }
    this.showNewProjectForm = this.showNewProjectForm.bind(this);
  }

  createProjectCards() {
     const projectComponent = this.props.projects.length !== 0 ?

     this.props.projects.map((project,i) =>{
       return(
         <div  className="Project-card" key={i}>
           <a href={"/project/" + project.key}>
             <h3>{project.name} </h3>
             <p>{project.description}</p>
             <p>{"Estimated time: " + project.estimatedTime + " hours"}</p>
           </a>
         </div>
       )
     })
     :
     <p className="No-projects-warning">Your project list its empty</p>
     return projectComponent;
  }

  showNewProjectForm (event) {
     this.setState({
       isNewClicked: !this.state.isNewClicked
     });
  }

  render () {
    return (
      <React.Fragment>
        <section>
          <h2>My Projects</h2>
          {this.createProjectCards()}
          <br/><br/>
          <button className="Button-new" onClick={this.showNewProjectForm}>
            New Project
          </button>
          <AddProjectForm visible={this.state.isNewClicked} authUserId={this.props.authUserId}
           authUserName={this.props.authUserName} visibilityHandler={this.showNewProjectForm} />
        </section>
      </React.Fragment>
    );
  }

}

export default MyProjectsList;

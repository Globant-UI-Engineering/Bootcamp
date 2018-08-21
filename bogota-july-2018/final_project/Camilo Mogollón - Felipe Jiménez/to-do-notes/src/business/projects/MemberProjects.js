import React from 'react';

class MemberProjectsList extends React.Component {

  createProjectCards() {
     const projectComponent = this.props.projects.length !== 0 ?

     this.props.projects.map((project,i) =>{
       return(
         <div  className="Project-card" key={i}>
           <a href={"/project/" + project.key}>
             <h3>{project.name} </h3>
             <p>{project.description}</p>
             <p>{"Estimated time: " + project.estimatedTime + " hours"}</p>
             <p>{"Published by: " + project.creatorName}</p>
           </a>
         </div>
       )
     })
     :
     <p className="No-projects-warning">You have not joined any project</p>

     return projectComponent;
  }

  render () {
    return (
      <React.Fragment>
        <section>
          <h2 className="App-title">Projects I have joined</h2>
          {this.createProjectCards()}
          <br/>
        </section>
      </React.Fragment>
    );
  }

}

export default MemberProjectsList;

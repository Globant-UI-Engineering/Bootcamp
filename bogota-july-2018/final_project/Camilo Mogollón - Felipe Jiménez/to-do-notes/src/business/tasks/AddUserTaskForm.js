import React, { Component } from 'react';
import '../../css/AddUserTaskForm.css';

class AddUserTaskForm extends Component{

constructor(){
    super();
    this.state ={
      title: '',
      responsible: 'Select an user',
      description: '',
      priority: "low",
    };
  }

handleSubmit = (event) => {
  event.preventDefault();
  if (this.state.title!=='' && this.state.description!==''  && this.state.responsible!=='Select an user'){
    this.props.onAddTask(this.state);
    this.setState({
        title: '',
        responsible:'Select an user',
        description: '',
        priority: 'low',
    });
  }else{
    alert('Please enter all fields');
  }
}

handleInputChange = (event) => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    });
}

loadMembers() {

   const membersComponent = this.props.memberList.map((member,i) =>{
     return(
       <option value={member.name} key={i}>{member.name}</option>
     )
   })
   return membersComponent;
}

render() {
   return (
     <React.Fragment>
       <h3 className="Section-title">New Task</h3>
       <form className="formBoard" onSubmit={this.handleSubmit}>
         <div className="Form-field">
           <label htmlFor="title">Title :</label>
           <input type="text" value={this.state.title} name="title" placeholder="Title" onChange = {this.handleInputChange} />
         </div>
         <div className="Form-field">
          <label htmlFor="responsible" >Responsible :</label>
            <select className="sectionOptions" name="responsible" value={this.state.responsible} onChange = {this.handleInputChange} >
              <option >Select an user</option>
              {this.loadMembers()}
            </select>
         </div>
         <div className="Form-field" >
           <label htmlFor="description" >Description : </label>
           <input type="text" value={this.state.description} name="description"placeholder="Description" onChange = {this.handleInputChange}/>
         </div>
         <div className="Form-field">
           <label htmlFor="priority" >Priority :</label>
             <select className="sectionOptions" name="priority" value={this.state.priority} onChange = {this.handleInputChange} >
               <option>low</option>
               <option>medium</option>
               <option>high</option>
             </select>
         </div>
         <button type="submit" className="Button-new">
           Save
         </button>
       </form>
     </React.Fragment>
   )
  }
}

export default AddUserTaskForm;

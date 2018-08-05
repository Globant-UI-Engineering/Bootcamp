import React from 'react';


const formatInputDate=(date)=>{
    let formatedDate="";
    formatedDate+= date.getFullYear().toString()+"-";
    formatedDate+= date.getMonth()<10? ("0"+date.getMonth().toString()+"-"):(date.getMonth().toString()+"-");
    formatedDate+= date.getDate()<10? ("0"+date.getDate().toString()):(date.getDate().toString());
    console.log(formatedDate);
    return(formatedDate);
}
class NewTodo extends React.Component {

    constructor(props){
        super(props);
        this.state={
            nowDate: formatInputDate(new Date),
            todo:"",
            completed : false,
            deathLine: undefined,

        }
        this.updateDate = this.updateDate.bind(this);
        this.updateCompleted = this.updateCompleted.bind(this);
        this.updateDeathLine = this.updateDeathLine.bind(this);
        //this.addTodo = this.addTodo.bind(this);
    }
     updateDate(){
         this.setState({
            nowDate:document.getElementById('newDate').value
         });
     }
     updateCompleted(){
        this.setState((prevState)=>({
        completed:!prevState.completed
        }));
     }
     updateDeathLine(){
         this.setState({
            deathLine: document.getElementById('deathLine').value
         });
     }
    render(){
        console.log(this.state.nowDate,this.state.completed);
        let isCompleted=this.state.completed?"COMPLETED":"UNCOMPLETE";
        return(
            <React.Fragment>
                <label> New To Do:
                    <input type="text"/>
                </label>
                <label> New Date:
                    <input id="newDate" type="date" value={this.state.nowDate} onChange={this.updateDate}/>
                </label>
                <label> Death Line
                    <input id="deathLine" type="date"/>
                </label>
                <label> Completed:
                    <div role="checkbox" onClick={this.updateCompleted}>{isCompleted}</div>
                </label>
                <button>SAVE</button>
            </React.Fragment>
        );
    }
}
export default NewTodo;
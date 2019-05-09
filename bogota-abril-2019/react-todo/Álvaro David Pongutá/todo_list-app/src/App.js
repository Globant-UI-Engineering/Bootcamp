import React from 'react';
import logo from './logo.svg';
import './App.scss';

class Header extends React.Component {
    render () {
        return (
            <header className = "App-header">
                <h1>To-Do List</h1>
                <img src = { logo } className = "App-logo" alt = "logo"></img>
            </header>
        );
    }
}

class Footer extends React.Component {
    render () {
        return (
            <div className = "App">
                <footer className = "App-footer">
                    Made by: Alvaro Ponguta. Globant - Bootcamp
                </footer>
            </div>
        );
    }
}

class Button extends React.Component {
    render () {
        return (
            <button className="App-button" onClick={this.props.onClick}>{this.props.buttonInfo}</button>
        );
    }
}

class ButtonIcon extends React.Component {
    render () {
        return (
            <button className="App-button App-button-icon" onClick={this.props.onClick}>{this.props.iconHTML}</button>
        );
    }
}

class Container_ToDo extends React.Component {

    constructor (props) {
        super(props);
        
        this.state = {
          generalTaskList: ['Task', 'Another task'],
          inputTaskInfo: ''
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }

    render () {
        return (
            <section className="App-container">
                <article className="App-container_firstRow">
                    <div className="App-row-elements">
                        <input type="text" onChange={ this.handleInputChange }/>
                        <Button onClick={this.handleAddTask} buttonInfo="Add Task"/>
                    </div>
                </article>
                <article>
                    <div className="App-row-elements">
                        <h2>Tasks:</h2>
                    </div>
                </article>
                <List taskList= {this.state.generalTaskList} onDeleteTask= {this.handleDeleteTask}/>
            </section>
        );
    }

    handleInputChange (event) {
        this.setState({
            inputTaskInfo: event.target.value
        })
    }
      
    handleAddTask (event) {
        if(this.state.inputTaskInfo.length > 0 && !this.state.inputTaskInfo.startsWith(' ')){
            let auxiliarTaskList = this.state.generalTaskList;
            let inputValue= this.state.inputTaskInfo;
            auxiliarTaskList.push(inputValue);
            
            this.setState({
                generalTaskList: auxiliarTaskList
            })
        }
    }

    handleDeleteTask (event) {

        for( var i = 0; i < this.state.generalTaskList.length; i++){ 
            if ( this.state.generalTaskList[i] === event) {
                this.state.generalTaskList.splice(i, 1); 
            }
        }
        
        this.setState({
            generalTaskList: this.state.generalTaskList
        })
    }
}

class List extends React.Component {

    constructor (props) {
        super(props);
        
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }

    render () {
        return (
            <article>
                <div className="App-row-elements">
                    {this.printTaskList()}
                </div>
            </article>
        );
    }

    printTaskList(){
        return this.props.taskList.map(task => 
            <Task taskInfo={task} onDeleteTask={this.handleDeleteTask} />
        );
    }

    handleDeleteTask(event){
        this.props.onDeleteTask(event);
    }
}


class Task extends React.Component {

    constructor (props) {
        super(props);
        
        this.state = {
          checked: false
        }
        
        this.handleCheck = this.handleCheck.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }

    handleCheck(event) {
        this.setState({
            checked: !this.state.checked,
        });
    }

    
    handleDeleteTask (event) {
        this.props.onDeleteTask(this.props.taskInfo);
    }

    render () {

        let checkedCss;

        if(this.state.checked){
            checkedCss= 'App-task App-task-checked';
        } else {
            checkedCss= 'App-task';
        }

        return (
            <div className={checkedCss}>
                <Checkmark onChecked={this.handleCheck} taskInfo={this.props.taskInfo}/>
                <ButtonIcon iconHTML={<i className='tiny material-icons' onClick={this.handleDeleteTask} >delete</i>}/>
            </div>
        );
    }

}

class Checkmark extends React.Component {
    

    constructor (props) {
        super(props);
        
        this.state = {
          checked: false
        }
        
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(event) {
        this.setState({
            checked: !this.state.checked
          }, function (){
            this.props.onChecked();
          });
    }
    

    render () {

        let checkedString;

        if(this.state.checked){
            checkedString= 'checked';
        } else {
            checkedString= '';
        }

        return (
            <label className="App-container-checkbox">{this.props.taskInfo}
                <input type="checkbox" checked= {checkedString} onChange={this.handleCheck} />
                <span className="App-checkmark"></span>
            </label>
        );
    }

}


class TODO_List extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <Container_ToDo/>
                <Footer/>
            </div>
        );
    }
}

export default TODO_List;
import React from 'react';
import './TaskCard.css';
import utils from '../../Utils/utils'

class TaskCard extends React.Component { 
    constructor(props){
        super(props);

        this.priorityRef = null;
        this.nextStateRef = null;
        this.cardRef = null;

        this.setPriorityRef = this.setPriorityRef.bind(this);
        this.setNextStateRef = this.setNextStateRef.bind(this);
        this.setCardRef = this.setCardRef.bind(this);
        this.stylePriority = this.stylePriority.bind(this);
        this.styleNextState = this.styleNextState.bind(this);
        this.changeButtonState = this.changeButtonState.bind(this);
    }

    componentDidMount() {
        this.stylePriority(this.props.priority);
        this.styleNextState(this.props.taskState);
        this.changeButtonState(this.props.taskState);
    }

    componentDidUpdate(prevPropst) {
        if(prevPropst.taskState !== this.props.taskState){
            this.stylePriority(this.props.priority);
            this.styleNextState(this.props.taskState);
            this.changeButtonState(this.props.taskState);
        }
    }

    render(){
        return(
            <div className="col-md-4">
                <section className="card mt-4" ref={this.setCardRef}>
                    <header className="card-header">
                        <button 
                            type="button" 
                            className="close" 
                            aria-label="Close" 
                            onClick={this.props.removeItSelf}>
                            <span aria-hidden="true">
                                <i className="far fa-times-circle"></i>
                            </span>
                        </button>                                             
                        <h3>{this.props.title}</h3>
                        <span className="badge badge-pill ml-2" ref={this.setPriorityRef}>
                            {this.props.priority}
                        </span>                                           
                    </header>
                    <main className="card-body">
                        <p>
                            <mark>{this.props.description}</mark>
                            <br/>
                            <strong>{this.props.responsible}</strong>
                        </p>
                    </main>
                    <footer className="card-footer">
                        <button 
                            className="btn"
                            onClick={ this.props.changeState }
                            ref={this.setNextStateRef}
                        >
                        {utils.nextTaskState(this.props.taskState)}
                        </button>
                    </footer>
                </section>
            </div>
        );
    }

    setPriorityRef = (element) => {
        this.priorityRef = element;
    }

    setNextStateRef = (element) => {
        this.nextStateRef = element;
    }

    setCardRef = (element) => {
        this.cardRef = element;
    }

    stylePriority = (priority) => {
        if (this.priorityRef) {
            this.priorityRef.classList.add(`badge-${utils.priorityToStyles(priority)}`);            
        };
    }

    styleNextState = (taskState) => {
        if (this.nextStateRef) {
            const nextTaskState = utils.nextTaskState(taskState);
            this.nextStateRef.classList.add(`btn-${utils.stateToStyles(nextTaskState)}`);            
        };
    }

    changeButtonState = (taskState) => {
        if(taskState === 'Done') {            
           this.cardRef.removeChild(this.cardRef.children[2]);
        }
    }
}

TaskCard.defaultProps = {
    title: '-',
    responsible: '-',
    description: '',
    priority: '-',
    taskState: 'Todo',
}

export default TaskCard;
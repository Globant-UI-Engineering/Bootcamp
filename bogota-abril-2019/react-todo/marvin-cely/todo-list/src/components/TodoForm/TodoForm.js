import React from 'react';
import './TodoForm.css';
import utils from '../../Utils/utils'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: '',
            taskState: 'Todo'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        // TODO: Refactorizar cógigo a más pequeño en funciones
        return(
            <section className="card">
                <form className="card-body" onSubmit={ this.handleSubmit }>
                    <article className="form-group">
                        <label htmlFor="title"></label>
                            <input 
                                type="text"
                                className="form-control" 
                                id="title" 
                                name="title"
                                aria-describedby="titleHelp" 
                                placeholder="Título"
                                onChange={ this.handleInput }
                                aria-required="true"
                                required/>
                            <small 
                                id="titleHelp" 
                                className="form-text text-muted ml-2">
                                Usa verbos en infinitivo.
                            </small>
                    </article>
                    <article className="form-group">
                        <label htmlFor="description"></label> 
                            <textarea
                                className="form-control" 
                                id="description"
                                name="description"
                                placeholder="Escriba aquí su descripción..."
                                onChange={ this.handleInput }>
                            </textarea>                       
                    </article>
                    <article className="form-group">
                        <label htmlFor="responsible"></label>
                            <input 
                                type="text"
                                className="form-control" 
                                id="responsible"
                                name="responsible"
                                placeholder="Responsable"
                                onChange={ this.handleInput }
                                aria-required="true"
                                required/>                        
                    </article>
                    <fieldset className="form-group">
                        <legend className="pt-2">Prioridad</legend>
                        <article className="custom-control custom-radio custom-control-inline">
                            <input 
                                type="radio" 
                                className="custom-control-input"
                                id="lowPriority" 
                                name="priority" 
                                value="Baja"
                                onChange={ this.handleInput }
                                required/>
                            <label 
                                className="custom-control-label" 
                                htmlFor="lowPriority">
                                Baja
                            </label>
                        </article>
                        <article className="custom-control custom-radio custom-control-inline">
                            <input 
                                type="radio" 
                                id="mediumPriority" 
                                name="priority" 
                                className="custom-control-input"
                                value="Media"
                                onChange={ this.handleInput }
                                required/>
                            <label 
                                className="custom-control-label" 
                                htmlFor="mediumPriority">
                                Media
                            </label>
                        </article>
                        <article className="custom-control custom-radio custom-control-inline">
                            <input 
                                type="radio" 
                                id="highPriority" 
                                name="priority" 
                                className="custom-control-input"
                                value="Alta"
                                onChange={ this.handleInput }
                                required/>
                            <label 
                                className="custom-control-label" 
                                htmlFor="highPriority">
                                Alta
                            </label>
                        </article>
                    </fieldset>
                    <button type="submit" className="btn btn-primary">
                        Agregar tarea
                    </button>
                </form>
            </section>
        )
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTask(this.state);
        // TODO: Create a message confirmation
    }
}

export default TodoForm;
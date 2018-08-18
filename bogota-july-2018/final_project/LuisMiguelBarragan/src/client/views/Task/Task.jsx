import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import taskStyle from '../../assets/jss/styles/views/taskStyle.jsx';
import { 
  TextField,
  Grid,
  card,
  Card,
  Typography,
  Button,
  Snackbar,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  IconButton,
  Icon
} from '@material-ui/core';

class Task extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      data: {
        title: '',
        description: '',
      },
      tasks: [],
      status: false
    };

    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };
  
  componentDidMount() {
    this.getTasks();  
  }

  addTask(e) {
    axios.post('/api/tasks', this.state.data)
      .then(data => {
        this.setState({ status: true, data: { title: '', description: ''} });
        this.getTasks();
      });
    e.preventDefault();
  };

  deleteTask(id) {
    axios.delete(`/api/tasks/${id}`)
    .then( () => {
      this.getTasks();
    });
  };

  getTasks() {
    axios.get('/api/tasks').then(res => {
      this.setState({ tasks: res.data });
    });
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState ({
      data: { ...this.state.data, [name]: value }
    });
  };

  handleClose() {
    this.setState({ status: false });
  };

  render() {
    const { data, status, tasks } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.container} >
        <Grid container justify='center' direction='row' spacing={40}>

          <Grid item>
            <Card className={classes.card}>
              <Typography className={classes.title} color="textSecondary">
                Create a New Task
              </Typography>
              <form className={classes.form} onSubmit={this.addTask}>
                  <Grid container direction='column'>
                    <TextField
                      className={classes.TextField}
                      name='title'
                      onChange={this.handleChange}
                      id="text-input"
                      label="Task Title"
                      type="text"
                      value={data.title}
                    />

                    <TextField 
                      className={classes.TextField}
                      name='description'
                      onChange={this.handleChange}
                      id='area-input'
                      label='Description'
                      type='text'
                      multiline
                      rows='2'
                      value={data.description}
                    />
                    <Button className={classes.button} variant='contained' type='submit' onClick={this.handleClick} color='secondary'> 
                      Send 
                    </Button>
                    <Snackbar
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
                      open={status}
                      onClose={this.handleClose}
                      ContentProps={{
                        'aria-describedby': 'message-id',
                      }}
                      message={<span id="message-id">Task Saved</span>}
                    />
                  </Grid>
              </form>
            </Card>
          </Grid>
          
          <Grid item>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { tasks.map(task => {
                      return (
                        <TableRow key={task._id}>
                          <TableCell>{task.title}</TableCell>
                          <TableCell>{task.description}</TableCell>
                          <TableCell>
                            <IconButton onClick={ () => this.deleteTask(task._id)}>
                              <Icon 
                               className='material-icons'
                               color='error'>
                                clear
                              </Icon>
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                  })}
                </TableBody>
              </Table>
            </Paper>   
          </Grid>
    
        </Grid>
      </div>
    )
  }
};

Task.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(taskStyle)(Task);
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Panel from '../components/Panel/Panel'
import AddButton from '../components/Button/AddButton'
import './css/pages.css'
import ToDoItem from './ToDoItem'



export default class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.todos)
    this.state = {
      item: this.props.todos
    };

  }



  render(props) {

    return (<ul>
      <div>
      Total Number of Modules: {this.props.count}
      </div>
      <ToDoItem todos={this.props.todos}/>
    </ul>)
  }
}

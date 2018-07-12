import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Panel from '../components/Panel/Panel'
import SimpleSelect from '../components/SimpleSelect/SimpleSelect'
import AddButton from '../components/Button/AddButton'
import TodoList from './ToDoList'
import './css/pages.css'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});


class CreateModule extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
         todos: [],
         count: []
       };
       this.removeTodo = this.removeTodo.bind(this);
       this.addTodo = this.addTodo.bind(this)
      this.upToDo = this.upToDo.bind(this)

   }

   addTodo(e) {
       e.preventDefault();
       var arrayList = [this.state.todos]
       this.setState({
         count: this.state.count.concat("1"),
         todos: this.state.todos.concat({id: this.state.todos.length})
       })
       console.log(this.state.todos)

   }

   removeTodo(name, i){
       let todos = this.state.todos.slice();
       let count = this.state.count.slice()
       count.splice(this.state.todos.count - 1,1)
       todos.splice( this.state.todos.length - 1, 1)
       this.setState(function(prevState){
         return {
           count: count,
           todos: todos,
         }
       });
       console.log(todos)
   }

   upToDo(arr, fromIndex, toIndex) {
     var element = arr[fromIndex];
     console.log("YA")
     arr.splice(fromIndex, 1);
     arr.splice(toIndex, 0, element);
       let todos = this.state.todos.slice();
       this.setState({
           todos
       });
   }






   render() {
       return(
           <div>

               <form onSubmit = {(e) => this.addTodo(e)}>
                   <button type="submit">ADD MODULE</button>
               </form>
               <SimpleSelect todos={this.state.todos} upToDo = {this.upToDo} removeTodo={this.removeTodo} count={this.state.count}/>


           </div>
       );
   }

}


CreateModule.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateModule);

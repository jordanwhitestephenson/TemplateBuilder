import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Module1 from '../../modules/Module1.js'
import Module2 from '../../modules/Module2.js'
import Module3 from '../../modules/Module3.js'
import Paper from '@material-ui/core/Paper';
import Panel from '../Panel/Panel'
import DropDown from '../DropDown/DropDown'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
const SortableItem = SortableElement(({value}) => <li>{value}</li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class SimpleSelect extends React.Component {
  constructor(props) {
    super(props);
  }


  removeItem(item, i) {
    this.props.removeTodo(item, i);
    console.log('after removal' + this.props.count.length)
  }
  upItem(arr, fromIndex, toIndex) {
    this.props.upToDo(arr, fromIndex, toIndex)
  }

  render() {

    return (<div class="selectedModules">
      {
        this.props.todos.map(function(todo, i) {
          return (
            <Paper data-id={i} key={i}>
            <DropDown/>
              <div className='deleteButton'>
                <button onClick={() => {
                    this.removeItem(this.props.todos, i)
                  }}>
                  <li>
                    REMOVE ID : {todo.id}
                  </li>
                </button>
              </div>
              {
                <button onClick={() => {
                      this.upItem(this.props.todos, todo.id, todo.id - 1)
                    }}>
                    UP
                  </button>
              }
            </Paper>)
        }, this)
      }
    </div>);
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);

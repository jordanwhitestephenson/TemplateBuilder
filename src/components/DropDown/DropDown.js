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

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });

  };
render() {
  const {classes} = this.props;
  const {name} = this.state;
  return (
    <div>
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">{this.state.name}</InputLabel>
        <Select value={this.state.name} onChange={this.handleChange} inputProps={{
            name: 'name'
          }}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Module1'}>Module1</MenuItem>
          <MenuItem value={'Module2'}>Module2</MenuItem>
          <MenuItem value={'Module3'}>Module3</MenuItem>
        </Select>
      </FormControl>
    </form>
    {name === 'Module1' && <Paper><Module1/></Paper>}
    {name === 'Module2' && <Paper><Module2/></Paper>}
    {name === 'Module3' && <Paper><Module3/></Paper>}
    </div>
  )

}

}

DropDown.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DropDown);

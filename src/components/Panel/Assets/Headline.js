import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SimpleTextField from '../../SimpleTextField/SimpleTextField'
import { TwitterPicker } from 'react-color';

class HeadlineMaker extends React.Component {
  state = {
    headline: '',
    color: '',
    size: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleChangeComplete = (color, event) => {
   this.setState({ color: color.hex });
 };
  render() {
    const { classes } = this.props;
    return (
      <div>
      <div>
      <TextField
        id="headline"
        label="Headline Text"
        value={this.state.headline}
        onChange={this.handleChange('headline')}
        margin="normal"
      />
        {this.state.headline}
      </div>

        <TextField
          id="size"
          label="Size"
          value={this.state.size}
          onChange={this.handleChange('size')}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        {this.state.size}
          <TwitterPicker
          color = {this.state.color}
          onChangeComplete = {this.handleChangeComplete} />
          {this.state.color}
      </div>
    )
  }
}

export default HeadlineMaker

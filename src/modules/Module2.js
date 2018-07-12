import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Panel from '../components/Panel/Panel'

class Module2 extends React.Component {
  render() {
    return (
      <div>
        <Panel img = {2}/>
      <h1> module2 </h1>
      </div>
    )
  }
}

export default Module2

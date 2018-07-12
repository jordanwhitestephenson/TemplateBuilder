import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Panel from '../components/Panel/Panel'

class Module1 extends React.Component {
  render() {
    return (
        <Panel firstTitle = {'Image  1'} imglabel = {'Img Link ='} secondTitle = {'Headline'}/>
    )
  }
}

export default Module1

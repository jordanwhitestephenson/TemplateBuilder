import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SimpleTextField from '../SimpleTextField/SimpleTextField'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import HeadlineMaker from './Assets/Headline'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  textField: {
   marginLeft: theme.spacing.unit,
   marginRight: theme.spacing.unit,
   width: 200,
 },
});
class Panel extends React.Component {
// function Panel(props) {

constructor(props) {
  super(props);
  this.state = {
    imgHeadline: '',
    headline: ''
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange = name => event => {
  this.setState({
    [name]: event.target.value,
  });
};

handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}


render(props) {
  const { classes } = this.props;
  return (
      <form className={classes.container} noValidate autoComplete="off">
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{this.props.firstTitle}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {this.props.imglabel}
          <TextField
            id={this.props.firstTitle}
            className={classes.textField}
            value = {this.state.imgHeadline}
            onChange = {this.handleChange('imgHeadline')}
            margin="normal"
          />
          {this.state.todos}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{this.props.secondTitle}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <HeadlineMaker/>

          {this.state.headline}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel disabled>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </div>
    </form>
  );
}
}

Panel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Panel);

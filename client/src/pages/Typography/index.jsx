import React, { Component, Fragment } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid, Typography as TypographyComponent } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from '../../layouts';
import {OrdersTable} from '../Dashboard/components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
});

class Typography extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Transactions">
        <div className={classes.root}>
          <Grid
            container
            spacing={4}
          >
             <OrdersTable className={classes.item} />
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Typography.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Typography);

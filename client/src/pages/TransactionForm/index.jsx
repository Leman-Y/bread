import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Button, TextField } from '@material-ui/core';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from '../../components';
import { getProducts } from '../../services/product';

// Component styles
import styles from './styles';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

class Account extends Component {
  state = {
    amount: '',
    date: '',
    description: '',
    category: '',
    products: []
  };

  handleDateChange = e => {
    this.setState({
      date: e.target.value,
    });
  };
  handleAmountChange = e => {
    this.setState({
      amount: e.target.value,
    });
  };
  handleDescriptionChange = e => {
    this.setState({
      description: e.target.value,
    });
  };
  handleCategoryChange = e => {
    this.setState({
      category: e.target.value,
    });
  };
  addToJson = e => {
    console.log("category", this.state.category);
    console.log("date", this.state.date);
    console.log("amount", this.state.amount);
    console.log("description", this.state.description);


  };


  async getProducts() {
    try {
      this.setState({ isLoading: true });

      const { products, productsTotal } = await getProducts();

        this.setState({

          products
        });
        console.log(products);
        console.log(states);
    } catch (error) {
        this.setState({
          isLoading: false,
          error
        });
    }
  }
  componentWillMount() {
    this.getProducts();
  }

  render() {
    const { classes, className, ...rest } = this.props;
    const { firstName, lastName, phone, state, country, email} = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            title="Transaction"
          />
        </PortletHeader>
        <PortletContent noPadding>
          <form
            autoComplete="off"
            noValidate
          >
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Amount"
                type="number"
                margin="dense"
                required
                value={firstName}
                variant="outlined"
                onChange={this.handleAmountChange}
              />
            </div>
            <div className={classes.field}>
              
              <TextField
                className={classes.textField}
                margin="dense"
                type="date"
                required
                value={lastName}
                variant="outlined"
                onChange={this.handleDateChange}
              />
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Description"
                margin="dense"
                required
                value={email}
                variant="outlined"
                onChange={this.handleDescriptionChange}
              />
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                // label="Select State"
                margin="dense"
                onChange={this.handleCategoryChange}
                required
                select
                SelectProps={{ native: true }}
                value={state}
                variant="outlined">
                {this.state.products.map(option => (
                  <option
                    value={option.title}
                  >
                    {option.title}
                  </option>
                ))}
              </TextField>
            </div>
          </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="contained"
            onClick={this.addToJson}
          >
            Add Transaction
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

Account.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);

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
    // const writeFileP = require("write-file-p");
    // // const writeFileP = require("../lib");

    // // Write a text file
    // writeFileP(`/output.txt`, "Hello World", (err, data) => {
    //     console.log(err || data);
    // });    
    
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
            title="Transaction Categories"
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
                label="Name"
                margin="dense"
                required
                variant="outlined"
                onChange={this.handleDescriptionChange}
              />
            </div>
          </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="contained"
            onClick={this.addToJson}
          >
            Add Transaction Category
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

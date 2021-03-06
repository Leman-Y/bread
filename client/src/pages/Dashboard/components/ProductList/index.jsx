import React, { Component, Fragment } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  Redirect,
  NavLink
} from 'react-router-dom';


// Shared services
import { getProducts } from '../../../../services/product';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Button,
  IconButton,
  Typography,
  CircularProgress
} from '@material-ui/core';

// Material icons
import {
  ArrowRight as ArrowRightIcon,
  MoreVert as MoreVertIcon
} from '@material-ui/icons';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from '../../../../components';

// Component styles
import styles from './styles';

class ProductList extends Component {
  signal = true;
  pStyle = {
    color : 'Blue'
  };
  
  state = {
    isLoading: false,
    limit: 4,
    products: [],
    productsTotal: 0,
    error: null
  };

  async getProducts() {
    try {
      this.setState({ isLoading: true });

      const { limit } = this.state;

      const { products, productsTotal } = await getProducts(limit);

      if (this.signal) {
        this.setState({
          isLoading: false,
          products,
          productsTotal
        });
      }
    } catch (error) {
      if (this.signal) {
        this.setState({
          isLoading: false,
          error
        });
      }
    }
  }

  componentWillMount() {
    this.signal = true;

    this.getProducts();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  renderProducts() {
    const { classes } = this.props;
    const { isLoading, products } = this.state;

    if (isLoading) {
      return (
        <div className={classes.progressWrapper}>
          <CircularProgress />
        </div>
      );
    }

    if (products.length === 0) {
      return (
        <Typography variant="h6">There are no transaction categies available</Typography>
      );
    }

    return (
      <Fragment>
        {products.map((product, i) => (
          <div
            className={classes.product}
            key={i}
          >
            <div className={classes.productImageWrapper}>
              <img
                alt="Product Name"
                className={classes.productImage}
                src={product.imageUrl}
              />
            </div>
            <div className={classes.productDetails}>
              <Link to="#">
                <Typography
                  className={classes.productTitle}
                  variant="h5"
                >
                  {product.title}
                </Typography>
              </Link>
              <Typography
                className={classes.productTimestamp}
                variant="body2"
              >
                Updated 5hr ago
              </Typography>
            </div>
            <div>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
  handleClick = () => {
    // if(!this.state.referrer){
      this.setState({referrer: '/transaction-categories'});
    // }
    // else{
    //   this.setState({referrer: null});
    //   console.log(window.location.href);
    // }
    
  }
  render() {
    const { classes, className, ...rest } = this.props;
    const { productsTotal } = this.state;

    const rootClassName = classNames(classes.root, className);
    if (this.state.referrer)return <Redirect to={this.state.referrer} />;
    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader noDivider>
          <PortletLabel
            subtitle={`${productsTotal} in total`}
            title="Transaction Catagories"
          />
        </PortletHeader>
        <PortletContent className={classes.portletContent}>
          {this.renderProducts()}
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
       
          <Button
            color="primary"
            size="small"
            variant="text"
            onClick = {this.handleClick}
          >
            View all <ArrowRightIcon />
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

ProductList.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductList);

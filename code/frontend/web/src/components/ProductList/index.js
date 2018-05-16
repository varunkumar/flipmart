//Dependencies
import React, { Component } from 'react';
//Internals
import AllProducts from './AllProducts';
import './index.css';

const titleMap = {
  'all': 'All Items',
  'accessories': 'Accessories',
  'clothes': 'Clothes',
  'electronics': 'Electronics'
};

const genderMap = {
  'men': 'Men',
  'women': 'Women'
};

class ProductList extends Component {
  getTitle = () => {
    const { category = 'all', gender = 'all' } = this.props;
    if (category === 'all' && gender !== 'all') {
      return `${genderMap[gender]}'s Items`;
    }

    if (gender === 'all') {
      return titleMap[category];
    }

    return `${genderMap[gender]}'s ${titleMap[category]}`;
  }
  render() {
    const { category = 'all', gender = 'all' } = this.props;
    return (
      <div className="items-wrapper">
        <div className="items-title">
          <h4>{this.getTitle(category)}</h4>
        </div>
        <AllProducts category={category} gender={gender} />
      </div>
    );
  }
}

export default ProductList;

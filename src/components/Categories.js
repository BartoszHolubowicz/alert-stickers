import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import './css/Categories.css';

class Categories extends Component {
  
  render() {
    const { categories } = this.props;
    const renderCategory = category => <Category name={category.name} tasks={category.tasks} id={category.id} key={category.id} />;

    return (
      <div className="categories">
        {categories.map(category => renderCategory(category))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state.categories };
};

Categories = connect(mapStateToProps)(Categories);

export default Categories;
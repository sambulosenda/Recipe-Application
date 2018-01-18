import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './Recipelist.css';

class Recipelist extends Component {
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired
  }
  
  render() {
    const {onDelete} = this.props;
    const recipes = this.props.recipes.map((r,index) => (
      <Recipe key={r.id} {...r} onDelete={onDelete} />
    ));
    
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )
  
  }
}

export default Recipelist;
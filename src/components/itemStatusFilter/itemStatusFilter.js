import React, { Component } from 'react';
import './itemStatusFilter.css';

class ItemStatusFilter extends Component {
  state = {};
  render() {
    return (
      <div className="btn-group">
        <button type="button" className="btn btn-info">
          All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Active
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Done
        </button>
      </div>
    );
  }
}

export default ItemStatusFilter;

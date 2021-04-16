import React from 'react';
import './itemAddForm.css';

const ItemAddForm = ({ onItemAdded }) => {
  return (
    <div>
      <input className="item-add-form" />
      <button
        className="btn btn-outline-secondary"
        onClick={() => onItemAdded('hello')}
      >
        Add Item
      </button>
    </div>
  );
};

export default ItemAddForm;

import React from 'react';

const DraggableItemsMenu = () => {
  return (
    <div className="menu">
      <h3>Choose an Item to Drag</h3>
      <div className="item" draggable={true}>
        <div type="text">Text Item</div>
      </div>
      <div className="item" draggable={true}>
        <div type="image">Image Item</div>
      </div>
    </div>
  );
};

export default DraggableItemsMenu;

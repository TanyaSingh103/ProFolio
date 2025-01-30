import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import EditableText from './EditableText';

const DraggableItem = ({ type, position }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'ITEM',  // Must match the type used in useDrop
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const style = {
    position: 'absolute',
    top: position.y - 20, // Adjust the item to be inside the canvas
    left: position.x - 50, // Adjust based on where the item is dropped
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move',
  };

  return (
    <div ref={drag} style={style}>
      {type === 'text' && <EditableText content="Editable Text" />}
      {type === 'image' && <img src="https://via.placeholder.com/100" alt="placeholder" />}
    </div>
  );
};

export default DraggableItem;

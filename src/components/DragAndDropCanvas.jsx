import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem';

const DragAndDropCanvas = () => {
  const [items, setItems] = useState([]);  // Store the dragged items on the canvas

  // Drop target to handle adding items to the canvas
  const [{ isOver }, drop] = useDrop({
    accept: 'ITEM',  // Type of draggable items
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      // Add the dragged item to the canvas with position data
      setItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), type: item.type, position: offset },
      ]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div 
      ref={drop} 
      className="canvas" 
      style={{ 
        width: '100%', 
        height: '500px', 
        border: '1px dashed black',
        position: 'relative', // This is important to ensure items are positioned relative to the canvas
      }}
    >
      <h2>Drag Components Here</h2>
      {isOver && <div className="overlay">Drop to add!</div>}
      {items.map((item) => (
        <DraggableItem key={item.id} type={item.type} position={item.position} />
      ))}
    </div>
  );
};

export default DragAndDropCanvas;

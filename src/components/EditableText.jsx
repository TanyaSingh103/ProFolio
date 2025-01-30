import React, { useState } from 'react';

const EditableText = ({ content }) => {
  const [text, setText] = useState(content);

  return (
    <div
      contentEditable={true}
      onBlur={(e) => setText(e.target.innerText)}
      style={{ minWidth: '150px', border: '1px solid #ccc', padding: '10px' }}
    >
      {text}
    </div>
  );
};

export default EditableText;

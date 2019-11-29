import React, { useState } from 'react';

function Input({ addTodo }) {
  const [inputText, setInputText] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <input
      type="text"
      value={inputText}
      onChange={(e) => onChange(e)}
      onKeyDown={(e) => onKeyDown(e)}
    />
  );
}

export default Input;

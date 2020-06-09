import React, { useContext } from 'react';
import { ColorContext, UPDATE_COLOR } from './color';

const Buttons = () => {
  const { dispatch } = useContext(ColorContext)

  return (
    <div>
      <button
        style={{ background: 'red' }}
        onClick={() => { dispatch({ type: UPDATE_COLOR, color: 'red' }) }}
      >
        red
      </button>
      <button
        style={{ background: 'yellow' }}
        onClick={() => { dispatch({ type: UPDATE_COLOR, color: 'blue' }) }}
      >
        blue
      </button>
    </div>
  );
}

export default Buttons

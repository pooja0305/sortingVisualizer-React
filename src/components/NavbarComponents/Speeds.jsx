import React from 'react';
import { SPEED } from '../helper/constants';

const Speeds = (props) => {
  return (
    <span className="options">
      <select
        name="Algorithm"
        id="menu"
        className="speed-menu"
        onChange={(e) => props.onChange(parseFloat(e.target.value), SPEED)}
      >
        {props.speeds.map((element, index) => (
          <option key={index} value={element}>
            {element}x
          </option>
        ))}
      </select>
    </span>
  );
};

export default Speeds;

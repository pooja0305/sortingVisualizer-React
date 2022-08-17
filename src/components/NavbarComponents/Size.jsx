import React from 'react';
import { SIZE } from '../helper/constants';

const Size = (props) => {
  return (
    <span className="options">
      <select
        name="size"
        id="menu"
        className="size-menu"
        onChange={(e) => props.onChange(e.target.value, SIZE)}
      >
        {props.lengths.map((element) => (
          <option key={10 * element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </span>
  );
};

export default Size;

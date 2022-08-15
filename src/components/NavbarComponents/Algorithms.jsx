import React from 'react';
import { ALGORITHM } from '../helper/constants';
const Algorithms = (props) => {
  return (
    <>
      <span className="options">
        <select
          name="Algorithm"
          id="menu"
          className="algo-menu"
          onChange={(e) => props.onChange(e.target.value, ALGORITHM)}
        >
          {props.algorithms.map((algo) => {
            return (
              <option key={algo.value} value={algo.value}>
                {algo.type}
              </option>
            );
          })}
        </select>
      </span>
    </>
  );
};

export default Algorithms;

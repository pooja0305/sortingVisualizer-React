import React from 'react';
import { ALGORITHM } from '../helper/constants';
const Algorithms = (props) => {
  const selectOptions = (
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
  );
  return (
    <>
      <span className="options"></span>
      {props.algoNumber === 0 ? (
        selectOptions
      ) : (
        <span style={{ color: 'white' }}>
          {props.algorithms[props.algoNumber].type}
        </span>
      )}
    </>
  );
};

export default Algorithms;

import React from 'react';
import '../App.css';
//for showing / visualizing
const Frame = (props) => {
  //using css class to change color
  const getClass = (value) => {
    if (value === 0) return 'cell';
    else if (value === 1) return 'cell current';
    else return 'cell done';
  };
  return (
    <div className="frame">
      <div className="arr">
        {props.array.map((elem, index) => (
          <div
            className={getClass(elem.classType)}
            key={index}
            style={{ height: `${4 * elem.key}px` }}
            value={elem.key}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Frame;

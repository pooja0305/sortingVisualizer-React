import React, { useState } from 'react';
import './CustomModel.css';
const CustomModel = (props) => {
  const [input, setInput] = useState('');
  const [arr, setArr] = useState([]);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    handleArr(e.target.value);
    setInput(e.target.value);
  };
  let TRY_FOR_LOGIN = false;
  const handleArr = (stringArr) => {
    const temp = stringArr.split(' ');
    console.log(error);
    console.log(temp);
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === '' || isNaN(temp[i])) {
        setError(true);
        return;
      }
    }
    setError(false);
    setArr(temp);
  };
  const handleRun = () => {
    //Open Login Component
    console.log(arr);
    const returnArr = [];
    for (let i = 0; i < arr.length; i++) {
      returnArr.push({ key: parseInt(arr[i]), classType: 0 });
    }
    props.start(parseInt(props.algoNumber), returnArr);
    props.closeCustomMode();
  };
  const clearInput = () => {
    setInput('');
    setArr([]);
  };
  return (
    <>
      {props.display && (
        <div>
          <section className="custom-model">
            <div className="header-model">
              <h3>Custom Input</h3>
              <span>
                <button onClick={props.closeCustomMode}>&times;</button>
              </span>
            </div>
            <textarea
              onChange={(e) => handleChange(e)}
              value={input}
              rows="4"
              cols="50"
              placeholder="Enter Array Elements With Spaces In Between Array Elements. Max size allowed is 100.Don't give trailing spaces"
            ></textarea>

            {error && <h3 style={{ color: 'red' }}>Error</h3>}
            <div className="control-buttons">
              <button id="run" onClick={handleRun}>
                {TRY_FOR_LOGIN ? 'LOGIN' : 'RUN!'}
              </button>
              <button id="clear" onClick={clearInput}>
                Clear
              </button>
            </div>
          </section>
          {/* {login && ( */}
          {/* )} */}
        </div>
      )}
    </>
  );
};

export default CustomModel;

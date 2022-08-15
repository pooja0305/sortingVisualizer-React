import React, { useEffect, useState } from 'react';
import { allCodes } from './AllCode';
import './Code.css';
const Code = ({ algoNumber }) => {
  useEffect(() => {
    setCode('');
  }, [algoNumber]);
  const [code, setCode] = useState('');
  const handleClick = (index) => {
    setCode(() => {
      setCode(allCodes[algoNumber][index].code);
    });
  };
  const languages = ['Java', 'C++', 'C', 'JS', 'Python'];
  return (
    <span className="code">
      <span className="program">
        <span className="options">
          {algoNumber === 0 ? (
            <h1>Hello Programmer</h1>
          ) : (
            languages.map((lang, index) => {
              return (
                <button key={index} onClick={() => handleClick(index)}>
                  <h2 key={index}>{lang}</h2>
                </button>
              );
            })
          )}
        </span>
        <pre>{code}</pre>
      </span>
    </span>
  );
};

export default Code;

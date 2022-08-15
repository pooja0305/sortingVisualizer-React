import React from 'react';
import './Description.css';
import data from './info.json';
const Description = ({ algoNumber }) => {
  return (
    <>
      <section className="description">
        <h3>{data[algoNumber].name}</h3>
        <p>{data[algoNumber].desc}</p>
        <h4>{data[algoNumber].desc !== null ? <p>Complexities</p> : null}</h4>
        {data[algoNumber].desc !== null ? (
          <>
            <p>
              Time Complexity{' '}
              <span>
                <b>{data[algoNumber].timeComplexity}</b>
              </span>
            </p>
            <p>
              Space Complexity{' '}
              <span>
                <b>{data[algoNumber].auxiliarySpace}</b>
              </span>
            </p>
          </>
        ) : null}
        {data[algoNumber].bestCase !== null &&
        data[algoNumber].worstCase != null ? (
          <>
            <h4>Cases</h4>
            <h5>
              Worst Case <span>{data[algoNumber].worstCase}</span>
            </h5>
            <h5>
              Best Case <span>{data[algoNumber].bestCase}</span>
            </h5>
          </>
        ) : null}
        {data[algoNumber].improvisation !== null ? (
          <h5>
            Improvisation <span>{data[algoNumber].improvisation}</span>
          </h5>
        ) : null}
        {data[algoNumber].inPlace !== null &&
        data[algoNumber].stable !== null ? (
          <h4>
            <p>Characteristics</p>

            <h5>
              Stable : <span>{data[algoNumber].stable}</span>
            </h5>
            <h5>
              InPlace : <span>{data[algoNumber].inPlace}</span>
            </h5>
          </h4>
        ) : null}
      </section>
    </>
  );
};

export default Description;

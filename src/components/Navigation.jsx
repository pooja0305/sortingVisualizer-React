import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ComputeAll from './ComputeAll';
import Visualizer from './Visualizer';
const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Visualizer algoNumber={0} />} />
        <Route
          path="/bubble-sort"
          exact
          element={<Visualizer algoNumber={1} />}
        />
        <Route
          path="/selection-sort"
          exact
          element={<Visualizer algoNumber={2} />}
        />
        <Route
          path="/insertion-sort"
          exact
          element={<Visualizer algoNumber={3} />}
        />
        <Route
          path="/merge-sort"
          exact
          element={<Visualizer algoNumber={4} />}
        />
        <Route
          path="/quick-sort"
          exact
          element={<Visualizer algoNumber={5} />}
        />
        <Route
          path="/heap-sort"
          exact
          element={<Visualizer algoNumber={6} />}
        />
        <Route path="/compute-all" exact element={<ComputeAll />} />
      </Routes>
    </>
  );
};

export default Navigation;

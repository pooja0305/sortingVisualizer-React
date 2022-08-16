import React from 'react';
import generator from './helper/generator';
import pause from './helper/pause';
import Navbar from './Navbar';
import getKeysCopy from './helper/keys.js';
import {
  ALGORITHM,
  SPEED,
  SIZE,
  SWAP,
  CURRENT,
  NORMAL,
  DONE,
} from './helper/constants';
import Frame from './Frame';
import Code from './moreInfo/Code';
// import ComputeAll from './ComputeAll';
import Description from './moreInfo/Description';
import selectionSort from './algorithms/selectionSort';
import bubbleSort from './algorithms/bubbleSort.js';
import heapSort from './algorithms/heapSort.js';
import insertionSort from './algorithms/insertionSort.js';
import mergeSort from './algorithms/mergeSort.js';
import quickSort from './algorithms/quickSort.js';
import { Routes, Route } from 'react-router-dom';
class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    //as this is a class component we can define local state to it
    //class components are also called stateful components
    this.state = {
      array: [], //this is our array which will get sorted initially set to empty
      size: 0, //default size will be 10
      speed: 0, //change the speed in it visualizes
      algorithm: 0, //which sorting algo is currently being selected
      running: false, //whether the algo is visualizing or not
    };
  }
  //when the Visualizer component gets mounted on the screen we need to generate an array
  componentDidMount = () => {
    //this method is a part of reacts component life cycle
    //this will be called when the component gets loaded on the UI

    //we need to generate our array when the component gets mounted so
    console.log(this.props.algoNumber);
    this.onChange(this.props.algoNumber, ALGORITHM);
    this.generateRandomArray();
  };
  /* for hooking to the time instant of any change in state/event */
  componentDidUpdate() {
    this.onChange();
    this.generateRandomArray();
  }
  generateRandomArray = () => {
    /*
        when array is not full and when the algo is not running
        create random array calls generator

        we won't just store integers inside the array
          each element in the list contains a <key, classType> where:
        key - integer value of element,
        classType - css class for changing color of element
    */
    if (this.state.array.length !== this.state.size && !this.state.running) {
      const list = generator(this.state.size, false);
      //console.log(list);
      this.setState({
        array: list,
      });
      //set state doesn't work synchronously so this console.log runs before the state is set and u get undefined
      // console.log(this.state.array);
    }
  };
  //use arrow function so that this keyword is binded in normal functions we have to bind it
  onChange = (value, option) => {
    if (option === ALGORITHM && !this.state.running) {
      this.setState({
        algorithm: Number(value),
      });
    }
    if (option === SPEED) {
      this.setState({
        speed: Number(value),
      });
    }
    if (option === SIZE && !this.state.running) {
      this.setState(
        {
          size: Number(value),
        },
        () => {
          this.setState({
            array: generator(this.state.size),
          });
        }
      );
    }
  };
  //select the algo and start the visualizing process
  start = async (algoNumber) => {
    this.lock(true); //don't change the state now
    const moves = await this.getMoves(algoNumber || this.state.algorithm); //get down all the steps/moves which happens in the algo process
    // console.log(moves); moves is either a 3d or 4d array
    //once u get it then show each move in moves
    await this.visualizeMoves(moves);
    await this.done();
    this.lock(false);
  };
  lock = (statusOfRunning) => {
    this.setState({ running: Boolean(statusOfRunning) });
  };

  done = async () => {
    const indexes = [];
    for (let i = 0; i < this.state.size; i++) {
      indexes.push(i);
    }
    await this.updateElementClass(indexes, DONE);
  };
  // get moves for corresponding algorithms
  getMoves = async (Name) => {
    let moves = [];
    let array = await getKeysCopy(this.state.array, this.state.size);
    if (Name === 1) {
      moves = await bubbleSort(array, array.length);
    }
    if (Name === 2) {
      moves = await selectionSort(array, array.length);
    }
    if (Name === 3) {
      moves = await insertionSort(array, array.length);
    }
    if (Name === 4) {
      moves = await mergeSort(array, array.length);
    }
    if (Name === 5) {
      moves = await quickSort(array, array.length);
    }
    if (Name === 6) {
      moves = await heapSort(array, array.length);
    }
    return moves;
  };
  visualizeMoves = async (moves) => {
    if (moves.length === 0) return;
    //if move length is 4 then we have to handle range part
    if (moves[0].length === 4) await this.visualizeMovesInRange(moves);
    else {
      await this.visualizeMovesBySwapping(moves);
    }
  };
  //attach debug pointers and understand
  //for visualizing range based sorting algo
  visualizeMovesInRange = async (moves) => {
    let prevRange = [];
    while (moves.length > 0 && moves[0].length === 4) {
      // change range only when required to avoid blinking
      if (prevRange !== moves[0][3]) {
        await this.updateElementClass(prevRange, NORMAL);
        prevRange = moves[0][3];
        await this.updateElementClass(moves[0][3], CURRENT);
      }
      await this.updateElementValue([moves[0][0], moves[0][1]]);
      moves.shift(); //removes element from the first
    }
    await this.visualizeMoves(moves);
  };
  //attach debug pointers and understand
  // for visualizing swapping based sorting algorithms
  visualizeMovesBySwapping = async (Moves) => {
    while (Moves.length > 0) {
      let currMove = Moves[0];
      // if container doesn't contains 3 elements then return 3-.j,j+1,swap
      if (currMove.length !== 3) {
        await this.visualizeMoves(Moves);
        return;
      } else {
        const indexes = [currMove[0], currMove[1]];
        await this.updateElementClass(indexes, CURRENT);
        if (currMove[2] === SWAP) {
          await this.updateArray(indexes);
        }
        await this.updateElementClass(indexes, NORMAL);
      }
      Moves.shift();
    }
  };
  updateArray = async (indexes) => {
    const array = [...this.state.array];
    const stored = array[indexes[0]].key;
    array[indexes[0]].key = array[indexes[1]].key;
    array[indexes[1]].key = stored;
    await this.updateStateChanges(array);
  };
  updateStateChanges = async (newArr) => {
    this.setState({ array: newArr });
    await pause(this.state.speed);
  };
  updateElementValue = async (indexes) => {
    const array = [...this.state.array];
    array[indexes[0]].key = indexes[1];
    await this.updateStateChanges(array);
  };
  updateElementClass = async (indexes, classType) => {
    const arr = [...this.state.array]; //spread operator
    for (let i = 0; i < indexes.length; i++) {
      arr[indexes[i]].classType = classType;
    }
    await this.updateStateChanges(arr);
  };

  //response is for responsive navbar
  response = () => {
    //this is not declarative approach
    const navbar = document.querySelector('.navbar');
    if (navbar.className === 'navbar') navbar.className += ' responsive';
    else navbar.className = 'navbar';

    //instead of using className.contains({class_name}) we are using strings to our advantage
  };
  generateNewRandomArray = () => {
    const list = generator(this.state.size, false);
    this.setState({
      array: list,
    });
  };
  generateSortedArray = () => {
    const list = generator(this.state.size, true);
    this.setState({
      array: list,
    });
  };
  //UI
  render() {
    return (
      <section className="visualizer">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Navbar
                  algoNumber={this.props.algoNumber}
                  generateSortedArray={this.generateSortedArray}
                  start={this.start}
                  response={this.response}
                  newArray={this.generateNewRandomArray}
                  onChange={this.onChange}
                  disabled={false}
                />
                <Frame array={this.state.array} />
                <section className="information">
                  <Description algoNumber={this.state.algorithm} />
                  <Code algoNumber={this.state.algorithm} />
                </section>
                {/* <button className="computeAll" style={{ margin: 'auto' }}>
                  <Link to="/compute-all" exact>
                    Compute All
                  </Link>
                </button> */}
              </>
            }
          />
        </Routes>
      </section>
    );
  }
}
export default Visualizer;

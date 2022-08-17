import React from 'react';
import Algorithms from './NavbarComponents/Algorithms';
import Speeds from './NavbarComponents/Speeds';
import Size from './NavbarComponents/Size';
import { Link } from 'react-router-dom';
import { CUSTOM } from './helper/constants';
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Algorithms: [
        { value: 0, type: '--select sorting algo--' },
        { value: 1, type: 'Bubble Sort' },
        { value: 2, type: 'Selection Sort' },
        { value: 3, type: 'Insertion Sort' },
        { value: 4, type: 'Merge Sort' },
        { value: 5, type: 'Quick Sort' },
        { value: 6, type: 'Heap Sort' },
      ],
      lengths: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, CUSTOM], //size of the array
      speeds: [0.0, 0.5, 0.75, 1.0, 1.5, 2.0, 4.0, 8.0],
    };
  }
  handleClick = (e) => {
    e.preventDefault();
    this.props.response();
  };
  //UI
  render() {
    return (
      <div
        className="navbar"
        id="navbar"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Link to="/">
          <h2 style={{ display: 'block', color: 'whitesmoke', flex: '1' }}>
            Sorting Visualizer -{'>'}
          </h2>
        </Link>
        <section className="nav-section" flex="3">
          <button id="random" onClick={() => this.props.newArray()}>
            Random Array
          </button>

          {/* //prop drilling onChange */}
          {
            <Algorithms
              algoNumber={this.props.algoNumber}
              onChange={this.props.onChange}
              algorithms={this.state.Algorithms}
            />
          }
          <Size onChange={this.props.onChange} lengths={this.state.lengths} />
          <Speeds onChange={this.props.onChange} speeds={this.state.speeds} />
          <button id="start" onClick={() => this.props.start()}>
            Start Visualizing
          </button>
          {this.props.algoNumber === 5 ? (
            <button
              id="random"
              onClick={() => this.props.generateSortedArray()}
            >
              Sorted Array
            </button>
          ) : null}
          <a className="icon" onClick={(e) => this.handleClick(e)} href="/">
            <i className="fa fa-bars"></i>
          </a>
        </section>
      </div>
    );
  }
}
export default Navbar;

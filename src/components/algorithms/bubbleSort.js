import { SWAP } from '../helper/constants'; //this is constant for indicating
import swap from '../helper/swap'; //this swaps

const bubbleSort = async (array, length) => {
  const moves = [];
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        await swap(array, j, j + 1);
        moves.push([j, j + 1, SWAP]);
      } else {
        moves.push([j, j + 1, !SWAP]);
      }
    }
    // moves.push(length - i - 1, length - i - 1, 2);
  }
  return moves;
};
export default bubbleSort;

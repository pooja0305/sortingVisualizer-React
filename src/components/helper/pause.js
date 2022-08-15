//used to give pause bw each step/move
const pause = async (speed) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 450 / speed);
    //pause=450ms/speed
    //if speed is more pause is less
  });
};

export default pause;

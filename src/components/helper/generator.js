const generator = (length, sortedOrNot) => {
  if (!sortedOrNot) {
    const list = [];
    const min = 1,
      max = 100;
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      list.push({ key: parseInt(randomNumber), classType: 0 });
    }
    return list;
  } else {
    const list = [];
    for (let i = 0; i < length; i++) {
      list.push({ key: parseInt(i), classType: 0 });
    }
    return list;
  }
};
export default generator;

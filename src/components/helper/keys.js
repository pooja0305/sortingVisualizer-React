const getKeysCopy = async (array, length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Number(array[i].key));
  }
  return arr;
};
export default getKeysCopy;

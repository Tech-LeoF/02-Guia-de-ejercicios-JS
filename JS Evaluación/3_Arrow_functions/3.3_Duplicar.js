let array = [2, 4, 6];

let arrowFunc = (a) => {
  return a.map(array => array * 2);
}

console.log(arrowFunc(array));
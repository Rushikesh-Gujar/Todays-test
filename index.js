
const findCombinations = (arr) => {
  let combinations = [];
  if (arr.length < 3) {
    return combinations;
  }
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] === arr[k]) {
          combinations.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  return combinations;
};

let arr = [2, 3, 11, 30, 3, 1, 4, 14, 27, 17, 5];
console.log(findCombinations(arr));
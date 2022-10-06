console.log("This is utils.js");

export let binSearch = function (arr, el) {
  let low = 0;
  let high = arr.length - 1;
  let mid = Math.trunc((low + high) / 2);
  for (; low <= high; ) {
    if (arr[mid] == el) {
      break;
    } else if (arr[mid] > el) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

    mid = Math.trunc((high + low) / 2);
  }

  if (high >= low) return mid;
  else return undefined;
};

let print = () => "Hello World";

export let intro = () => "This is Shakti Santosh Nayak";

// export { print as default };

let info = {
  name: "Shakti Santosh Nayak",
  age: 19,
};

export default print;

// This expects a exxpression

// export { binSearch, print };

// This is named export

// Instead of exporting all the functions in one go we can do inline named export as well and this can be done just by writing export in front of variable declaration

// console.log(binSearch([1, 2, 3, 4], 2));

// There are types of exports that is named exports and default exports

// There can be only one default export

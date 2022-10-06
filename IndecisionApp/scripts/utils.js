"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
console.log("This is utils.js");

var binSearch = exports.binSearch = function binSearch(arr, el) {
  var low = 0;
  var high = arr.length - 1;
  var mid = Math.trunc((low + high) / 2);
  for (; low <= high;) {
    if (arr[mid] == el) {
      break;
    } else if (arr[mid] > el) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

    mid = Math.trunc((high + low) / 2);
  }

  if (high >= low) return mid;else return undefined;
};

var print = function print() {
  return "Hello World";
};

var intro = exports.intro = function intro() {
  return "This is Shakti Santosh Nayak";
};

// export { print as default };

var info = {
  name: "Shakti Santosh Nayak",
  age: 19
};

exports.default = print;

// This expects a exxpression

// export { binSearch, print };

// This is named export

// Instead of exporting all the functions in one go we can do inline named export as well and this can be done just by writing export in front of variable declaration

// console.log(binSearch([1, 2, 3, 4], 2));

// There are types of exports that is named exports and default exports

// There can be only one default export

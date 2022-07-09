/*
Prompt taken from a java question that I am solving in JavaScript, the 3 in the input represents the number of elements in the input and is not necessary in this solution
Max Absolute Difference - difference between [A-B] 
To find the maximum difference, check each element and find the maximum difference between 2 elements i.e [1-2] = 1, [1-5] = 4, [2-5] = 3
Max difference will be 4 from 1-5

Step 1: turn input into:
"3
1 2 5"*/
let input = "3\n1 2 5"; 
const difference = () => {
  // split 1 2 5 at space
  const result = input.split('\n')[1].split(' ').reduce(
    (target, el) => {
      let { min, max } = target;

      target["min"] = el > min ? el : min; // true: el, false: min
      target["max"] = el < max ? el : max; // true: el, false: max

      return target;
    },
    { min: -999, max: 999 } // initialize min max object values
  );

  console.log(Math.abs(result["max"] - result["min"]));
};

difference();
// Given a non-empty array where each element represents a digit of a non-negative integer, add one to the integer. The most significant digit is at the front of the array and each element in the array contains only one digit. Furthermore, the integer does not have leading zeros, except in the case of the number '0'.

// Example:
// Input: [2,3,4]
// Output: [2,3,5]
// class Solution():
//   def plusOne(self, digits):
//     # Fill this in.

// num = [2, 9, 9]
// print(Solution().plusOne(num))
// # [3, 0, 0]

function plusOne(num) {
  const novo = [...num];

  for (let index = num.length - 1; index >= 0; --index) {
    const string = String(novo[index] + 1);
    if (string.length === 2) novo[index] = +string.at(-1);
    else {
      novo[index] = +string;
      break;
    }
  }

  return novo;
}
plusOne([2, 3, 4]);
plusOne([2, 9, 9]);

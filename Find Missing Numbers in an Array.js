// Hi, here's your problem today. This problem was recently asked by Twitter:

// Given an array of integers of size n, where all elements are between 1 and n inclusive, find all of the elements of [1, n] that do not appear in the array. Some numbers may appear more than once.

// Example:

// Input: [4,5,2,6,8,2,1,5]
// Output: [3,7]

// class Solution(object):
//   def findDisappearedNumbers(self, nums):
//     # Fill this in.

// nums = [4, 6, 2, 6, 7, 2, 1]
// print(Solution().findDisappearedNumbers(nums))
// # [3, 5]

// For this problem, you can assume that you can mutate the input array.

class Solution {
  static findDisappearedNumbers(nums) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    const range = Array.from({ length: max - min + 1 }, (_, i) => i + 1);

    return range.filter((e) => !nums.includes(e));
  }
}

console.log(Solution.findDisappearedNumbers([4, 6, 2, 6, 7, 2, 1]));

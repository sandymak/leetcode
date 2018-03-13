/*
Source: https://leetcode.com/problems/single-number/description/
Author: Sandy Mak
Date: March 13, 2018

PROMPT:
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

APPROACH 1 (MATH):
  1) We know that 2*(a + b + c) - (a+a+b+b+c) = c; (expectedSum - actualSum)
  2) We can create two variables (expectedSum and actualSum)
  3) To keep track of the sums, we can us an object to store the elements of the array as we iterate through (in this case, we will know when we have duplicated elements)

  Complexity Analysis
  1) Time: O(n) = we will have to iterate through the array of n elements in order to create obj and also the sums
  2) Space: O(n) = a new Object of (n/2)+1 = 0(n) elements will be needed to store them.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let expectedSum = 0,
      actualSum = 0,
      numObj = {},
      missingNum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i]
    if (!numObj[nums[i]]) {
      numObj[nums[i]] = 1;
      expectedSum += nums[i] * 2;
    }
  }
  missingNum = expectedSum - actualSum;
  return missingNum;
};

let numbers = [1, 2, 3, 4, 3, 2, 1];
singleNumber(numbers);

/*
APPROACH 2 (Bit Manipulation from LeetCode)

1) If we take XOR of zero and some bit, it will return that bit
      a ^ 0 = a
2) If we take XOR of two same bits, it will return 0
      a ^ a = 0
3) Therefore....we can XOR all bits together to find the unique number.
      a ^ b ^ a =
      (a ^ a) ^ b =
      0 ^ b =
      b;

Complexity Analysis
1) Time: O(n) : O(n) = we will have to iterate through the array of n elements in order perform XOR on all elements
2) Space: O(1)
*/

var singleNumber2 = function(nums) {
  let missingNum = 0;

  for (let i = 0; i < nums.length; i++) {
    missingNum ^= nums[i];
    console.log(missingNum);
  }
  return missingNum;
};

singleNumber2(numbers)

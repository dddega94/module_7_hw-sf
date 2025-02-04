const nums = [2,2,6,66,55,36,67,5,5,2,8,9,8,4,44,4];

const uniqueNums = (nums) => {
  return Array.from(new Set(nums)).sort((a, b) => a-b);
}

console.log(uniqueNums(nums));
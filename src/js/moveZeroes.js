const swap = (nums, i, j) => {
  nums[i] = nums[i] + nums[j];
  nums[j] = nums[i] - nums[j];
  nums[i] = nums[i] - nums[j];
}

const moveZeroes = nums => {  
  let snowBallSize = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      snowBallSize++; 
    }
    else if (snowBallSize > 0) {
      swap(nums, i, i - snowBallSize);
    }
  }

  return nums;
};

nums = [0,0,1]

console.log(moveZeroes(nums));
pub fn max_ascending_sum(nums: Vec<i32>) -> i32 {
  if nums.len() < 1 {
    return nums[0];
  }

  let mut max_sum = nums[0];
  let mut curr_sum = nums[0];
  for n in 1..nums.len() {
    if nums[n] > nums[n - 1] {
      curr_sum += nums[n];
    } else {
      curr_sum = nums[n];
    }

    if curr_sum > max_sum {
      max_sum = curr_sum;
    }
  }

  max_sum
}

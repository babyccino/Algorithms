use std::collections::HashSet;

pub fn minimum_operations(nums: Vec<i32>) -> i32 {
  let set: HashSet<i32> = HashSet::from_iter(nums.iter().cloned());

  return set.len() as i32 - set.contains(&0) as i32;
}

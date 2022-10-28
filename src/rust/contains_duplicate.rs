use std::collections::HashSet;

pub fn contains_duplicate(nums: Vec<i32>) -> bool {
  let mut set: HashSet<i32> = HashSet::new();
  for n in nums {
    if set.contains(&n) {
      return true;
    }
    set.insert(n);
  }
  return false;
}

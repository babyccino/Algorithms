// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
  pub val: i32,
  pub left: Option<Rc<RefCell<TreeNode>>>,
  pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
  #[inline]
  pub fn new(val: i32) -> Self {
    TreeNode {
      val,
      left: None,
      right: None,
    }
  }
}

use std::cell::RefCell;
use std::rc::Rc;
pub fn check_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
  if let Some(root_ref) = root {
    let left = root_ref.borrow().left.clone();
    let right = root_ref.borrow().right.clone();

    return root_ref.borrow().val == left.unwrap().borrow().val + right.unwrap().borrow().val;
  }
  return false;
}

pub fn wrap(tree: TreeNode) -> Option<Rc<RefCell<TreeNode>>> {
  Some(Rc::new(RefCell::new(tree)))
}

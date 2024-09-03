class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const inorderTree = (root) => {
  let result = [];
  let stack = [];
  let current = root;

  while (current !== null || stack.length !== 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};

// Create a tree: [1, 2, null, 3]
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);

console.log(inorderTree(root));

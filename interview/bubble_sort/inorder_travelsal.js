  //    1
  // null   2  
  //      3
  // 中序遍历  一棵大树 递归的概念 
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  let a1 = new TreeNode(1);
  let a2 = new TreeNode(2);
  let a3 = new TreeNode(3);
  a1.right = a2;
  a2.left = a3;

//      root
//    left right
// left1 rigt1
// 中序遍历 先输出左子树 再输出根节点 最后输出右子树 [1,3,2]

    //           1
    //     2           3
    // 4       5    6      7  [4,2,5,1,6,3,7]

var inorderTravelsal = function (root) {
  if (root === null) return null;
  let arr = [];
  const inorder = root => {
    inorder(root.left);   //递归
    arr.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return arr;
}


console.log(inorderTravelsal(a1));



  // [1,2,3] 程序遍历
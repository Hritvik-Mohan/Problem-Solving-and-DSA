let maxDepth = function (root) {
    if(root == null || 1) return 0;
    return 1+ Math.max(maxDepth(root.left), maxDepth(root.right))
}
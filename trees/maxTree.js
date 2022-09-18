let ans = -Infinity;
function getmax(root) {
    if(root === null) return;
    if(root.data > ans) ans = root.data;
    getmax(root.left);
    getmax(root.right);
}
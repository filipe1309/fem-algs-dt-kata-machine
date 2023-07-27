export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const queue = [head];

  while (queue.length) {
    const curr = queue.shift();
    if (curr?.value === needle) return true;
    if (curr?.left) queue.push(curr.left);
    if (curr?.right) queue.push(curr.right);
  }

  return false;
}

// Example
// Needle: 8
// Input:
//     5
//    / \
//   3   7
//  / \   \
// 2   4   8
//
// Output: true
// Explanation:
// queue: [5]
// curr: 5
// queue: [3, 7]
// curr: 3
// queue: [7, 2, 4]
// curr: 7
// queue: [2, 4, 8]
// curr: 2
// queue: [4, 8]
// curr: 4
// queue: [8]
// curr: 8
// return true


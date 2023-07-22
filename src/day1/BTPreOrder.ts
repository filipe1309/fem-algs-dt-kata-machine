export default function pre_order_search(head: BinaryNode<number>): number[] {
  let numbers: number[] = [];
  return traverse(head, numbers)
}

function traverse(head: BinaryNode<number> | null, numbers: number[]): number[] {
  if (!head) return numbers;
  numbers.push(head.value);
  traverse(head.left, numbers);
  traverse(head.right, numbers);
  return numbers;
}

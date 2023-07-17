type Node<T> = {
    value: T,
    prev?: Node<T>
}

// Insert/push in the top/head, remove/pop in the top/head
// 1 (top) // push(1), top = 1
// 1 <- 2 (top) // push(2), top = 2
// 1 <- 2 <- 3 (top) // push(3), top = 3
// 1 <- 2 <- 3 <- 4 (top) // push(4), top = 4
// 1 <- 2 <- 3 (top) // pop(), top = 3
// 1 <- 2 (top) // pop(), top = 2

export default class Stack<T> {
    public length: number;
    private top?: Node<T>; // or head

    constructor() {
        this.length = 0;
        this.top = undefined;
    }

    push(item: T): void {
        this.length++
        const newNode = { value: item } as Node<T>;
        newNode.prev = this.top;
        this.top = newNode;
    }

    pop(): T | undefined {
        if (!this.top) return undefined;
        this.length--;
        const nodeValue = this.top?.value;
        this.top = this.top?.prev;
        return nodeValue;
    }

    peek(): T | undefined {
        return this.top?.value;
    }
}

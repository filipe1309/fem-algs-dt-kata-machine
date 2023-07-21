type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>
}

// 5, append(5)
// 5 <-> 7, append(7)
// 5 <-> 7 <-> 9, append(9)
// 5 <-> 7 <-> 9, get(2) = 9
// 5 <-> 9, removeAt(1) = 7, length = 2
// 5 <-> 9 <-> 11, append(11)
// 5 <-> 11, removeAt(1) = 9
// 5 <-> 11, remove(9) = undefined
// 11, removeAt(0) = 5
// removeAt(0) = 11, length = 0
// 5, prepend(5)
// 7 <-> 5, prepend(7)
// 9 <-> 7 <-> 5, prepend(9)
// 9 <-> 7 <-> 5, get(2) = 5
// 9 <-> 7 <-> 5, get(0) = 9
// 7 <-> 5, remove(9) = 9, length = 2
// 7 <-> 5, get(0) = 7

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {
        this.length++;
        let newNode = { value: item } as Node<T>;
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {
        if (this.length = 0) return;
        if (idx > this.length) throw new Error("Bad idx, list size limit exceeded");
        if (idx == this.length) { this.append(item); return; }
        if (idx == 0) { this.prepend(item); return; }

        this.length++;
        let newNode = { value: item } as Node<T>;
        
        let curr = this.getAt(idx);

        newNode.next = curr
        newNode.prev = curr?.prev

        if (curr?.prev) curr.prev = newNode
        if (newNode?.prev?.next) newNode.prev.next = newNode
    }

    append(item: T): void {
        this.length++;
        let newNode = { value: item } as Node<T>;
        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode
        this.tail = newNode;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value == item) break;
            curr = curr?.next;
        }

        if (!curr) return undefined;

        return this.removeNode(curr)
    }

    get(idx: number): T | undefined {
        let node = this.getAt(idx);
        return node?.value
    }

    private getAt(idx:number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr?.next && i < idx; i++) {
            curr = curr?.next;
        }

        return curr;
    }

    removeAt(idx: number): T | undefined {
        let node = this.getAt(idx);
        if (!node) return undefined;

        return this.removeNode(node)
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length == 0) this.head = this.tail = undefined;
        
        if (node.prev?.next) node.prev.next = node?.next
        if (node.next?.prev) node.next.prev = node?.prev

        if (node === this.head) this.head = node.next;
        if (node === this.tail) this.tail = node.prev;

        node.prev = node.next = undefined

        return node?.value
    }
}

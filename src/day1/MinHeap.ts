export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): number[] {
        this.mySolutionInsert(value)
        return this.data
    }
    delete(): number {
        return this.mySolutionDelete();
    }

    mySolutionInsert(value: number) {
        this.data.push(value);
        this.mySolutionInsertHeapifyUp(this.length)
        this.length++;
    }

    mySolutionInsertHeapifyUp(idx: number): void {
        let parentIdx = this.parent(idx);
        let parent = this.data[parentIdx];
        let nodeIdx = idx;
        let node = this.data[nodeIdx];
        while (node < parent) {
            this.data[nodeIdx] = parent;
            this.data[parentIdx] = node;

            nodeIdx = parentIdx
            parentIdx = Math.floor(((parentIdx - 1) - 1) / 2);
            parent = this.data[parentIdx];
            node = this.data[nodeIdx];
        }
    }

    mySolutionDelete(): number {
        const del = this.data.shift();
        const last = this.data.pop();
        if (last) this.data.unshift(last);
        this.length--;
        this.mySolutionDeleteHeapifyDown(0);
        return del|| 0;
    }

    mySolutionDeleteHeapifyDown(idx: number): void {
        const node = this.data[idx];
        if (node === null) return;

        const left = this.data[this.leftChild(idx)];
        const right = this.data[this.rightChild(idx)];
        const idxMinChild = (left < right) ? this.leftChild(idx) : this.rightChild(idx);
        const minChild = this.data[idxMinChild];

        if (node > minChild) {
            this.data[idxMinChild] = node;
            this.data[idx] = minChild;
            this.mySolutionDeleteHeapifyDown(idxMinChild);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    
    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}

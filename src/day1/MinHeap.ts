export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): number[] {
        this.solutionInsert(value)
        return this.data
    }
    delete(): number {
        return this.solutionDelete();
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
        return del|| -1;
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

    solutionInsert(value: number) {
        this.data.push(value);
        this.heapifyUp(this.length)
        this.length++;
    }

    heapifyUp(idx: number): void {
        if (idx === 0) return;

        const parentIdx = this.parent(idx);
        const parent = this.data[parentIdx];
        const node = this.data[idx];

        if (parent > node) {
            this.data[parentIdx] = node;
            this.data[idx] = parent;

            this.heapifyUp(parentIdx);
        }
    }


    solutionDelete(): number {
        if (this.length === 0) return -1;
        const out = this.data[0];
        this.length--;
        if (this.length === 0) { this.data = []; return out; }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if (idx >= this.length || lIdx >= this.length) return;

        const lV = this.data[lIdx];
        const rV = this.data[rIdx];
        const nV = this.data[idx];

        if (lV > rV && nV > rV) {
            this.data[rIdx] = nV;
            this.data[idx] = rV;
            this.heapifyDown(rIdx);
        } else if (rV > lV && nV > lV) {
            this.data[lIdx] = nV;
            this.data[idx] = lV;
            this.heapifyDown(lIdx);
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

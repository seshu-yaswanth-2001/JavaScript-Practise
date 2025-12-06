class MaxHeap{
    constructor(){
        this.heap = [];
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(index) {
        return index * 2 + 1;
    }

    rightChild(index) {
        return index * 2 + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    insert(item) {
        this.heap.push(item);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        while(index > 0) {
            const parent = this.parent(index);

            if(this.heap[parent] < this.heap[index]) {
                this.swap(parent, index);
                index = parent;
            } else {
                break;
            }
        }
    }

    extractMax() {
        if(this.isEmpty()) return null;
        if(this.size() ===  1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    heapifyDown(index) {
        const size = this.size();

        while(true) {
            let largest = index;
            const right = this.rightChild(index);
            const left = this.leftChild(index);

            if(left < size && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if(right < size && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if(largest !== index) {
                this.swap(largest, index);
                index = largest;
            } else {
                break;
            }
        }
    }

    // timecomplexity: O(n) - heapify
    buildHeap(arr) {
        this.heap = arr.slice();
        const start = Math.floor((this.size() - 2) / 2);
        for (let i = start; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    showItems() {
        return [...this.heap];
    }
}


const heap = new MaxHeap();
// heap.insert(10);
// heap.insert(20);
// heap.insert(5);
// heap.insert(30);
// heap.insert(25);
heap.buildHeap([10, 20, 5, 30, 25]);

console.log(heap.showItems());
console.log(heap.extractMax());
console.log(heap.showItems());
console.log(heap.peek());
console.log(heap.size());
console.log(heap.isEmpty());
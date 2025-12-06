class MinHeap{
  constructor(){
    this.heap = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  insert(item) {
    this.heap.push(item);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    while(index > 0) {
      const parent = this.parent(index);

      if(this.heap[parent] > this.heap[index]) {
        this.swap(parent, index);
        index = parent;
      } else {
        break;
      }
    }
  }

  extractMin() {
    if(this.isEmpty()) return null;
    if(this.size() === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyDown(index) {
    const size = this.size();

    while(true) {
      const left = this.leftChild(index);
      const right = this.rightChild(index);
      let smallest = index;

      if(left < size && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if(right < size && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if(smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  // timeComplexity: O(n) - heapify
  buildHeap(arr) {
    this.heap = arr.slice();

    const start = this.parent(this.size() - 1);
    for (let i = start; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  showItems() {
    return [...this.heap];
  }
}

const heap = new MinHeap();
heap.buildHeap([5,3,8,1,2,7]);
console.log(heap.showItems());
heap.insert(0);
console.log(heap.showItems());
console.log(heap.extractMin());
console.log(heap.showItems());


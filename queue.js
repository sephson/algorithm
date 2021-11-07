class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    //add to the lasst
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
    }
    return this.size;
  }

  dequeue() {
    //first thing added in
  }
}

let q = new Queue();

q.enqueue("first");
q.enqueue("second");

console.log(q);

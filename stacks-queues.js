class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    let temp;
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else {
      temp = this.first;
      this.first = newNode;
      newNode.next = temp;
      this.size++;
    }
    return this;
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

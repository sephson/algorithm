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
      this.first.next = temp;
      this.size++;
    }
    return this.size;
  }
  pop() {
    let temp;
    if (!this.first) return null;
    else if (this.size === 1) {
      return null;
    } else {
      temp = this.first;
      this.first = this.first.next;
      this.size--;
    }
    return temp.value;
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);

console.log(stack.pop());

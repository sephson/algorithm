class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class sll {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }
  //removing the node from the end of the linked list
  pop() {
    if (!this.head) return undefined;
    else {
      let current = this.head;
      let newTail = current;

      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }
  //removing a new node from the begining of the LL
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  //add to the beginning of a list
  unshift(val) {
    let newNode = new Node(val);
    let oldHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
  }
  //find node based on index passed as arg
  find(index) {
    let count = 0;
    if (count < 0 || count >= this.length) return null;
    if (!this.head) return undefined;
    let current = this.head;
    while (current.next) {
      if (count === index) {
        return current;
      }
      count++;
    }
  }
}

let list = new sll();

list.unshift(1);
list.unshift(2);
list.unshift(3);
list.unshift(4);

console.log(list, find(1));

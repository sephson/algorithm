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
    if (index < 0 || index >= this.length) return null;
    if (!this.head) return undefined;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }
  //replace existing value
  set(index, val) {
    let foundNode = this.find(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // insert new value
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.find(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.pop(val);
    if (index === 0) return this.shift(val);
    let prev = this.find(index - 1);
    let del = prev.next;
    prev.next = del.next;
    this.length--;
    return del;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let previous = null;
    let count = 0;
    while (count < this.length) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
      count++;
    }
    return this;
  }
}

let list = new sll();

list.unshift(1);
list.unshift("Disu");
list.unshift(2);
list.reverse();
console.log(list);

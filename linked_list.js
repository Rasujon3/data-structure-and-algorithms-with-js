class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head; // matha, suru
  }
  add(value) {
    const newNode = new Node(value);
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  }
}

const head = new Node(1500);
const mBondhon = new LinkedList(head);
mBondhon.add(27);
mBondhon.add(13);
mBondhon.add(59);
mBondhon.add(68);
mBondhon.add(43);
console.log(JSON.stringify(mBondhon));

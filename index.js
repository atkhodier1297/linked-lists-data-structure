// Arrays vs Hash Tables

// 1. **Space Usage**:
//    - Arrays use less memory because they only store values.
//    - Hash tables use more memory because they store both keys and values.

// 2. **Access Speed**:
//    - Arrays are fast to access with a constant time O(1) because you know the index.
//    - Hash tables are also typically fast (O(1) on average), but occasional collisions can make them slower in rare cases.

// 3. **Insertion and Deletion**:
//    - Arrays are slow for insertions and deletions (O(n)) because shifting elements may be needed.
//    - Hash tables are fast for insertions and deletions (O(1) on average).

// 4. **Order**:
//    - Arrays are ordered, meaning elements are in a specific sequence.
//    - Hash tables are unordered, so there's no guaranteed order.

// 5. **Duplicates**:
//    - Arrays can contain duplicates easily.
//    - Hash tables can also store duplicates, but handling them may require extra work.

// 6. **Sorting**:
//    - Arrays can be sorted efficiently.
//    - Hash tables are not naturally suited for sorting; you'd need to convert them to an array first.

// 7. **Memory Usage**:
//    - Arrays are memory-efficient when the size is known and fixed.
//    - Hash tables can waste memory if they're significantly larger than the stored elements.

// 8. **Keys vs. Values**:
//    - Arrays only store values.
//    - Hash tables store key-value pairs, useful for mapping relationships.

// 9. **Implementation Complexity**:
//    - Arrays are straightforward to use and implement.
//    - Hash tables require more complex implementation and may introduce bugs if not done correctly.

// Our next data structure is Linked Lists

// Why are Linked Lists good?
// Essentially you can inset and delete without shifting everything else
// Insertion requires an index to shift in Arrays but not in LL's
// Doing all that shifting costs us O(n)
// Linked lists traverse kind of like iteration
// Linked lists are scattered all over in memory
// However inserts are still better in LL's
// The one advantage of LL's over HT is it's sorted

// Linked List operations

// prepend O(1)
// append O(1)
// look up O(n) Traversal start at head and look for what we want
// insert O(n)
// delete O(n)

// Insert and Delete in Arrays are also O(n)...so why LL's???

// First Linked List

// 10-->5-->16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

// think of this node as a container or bucket around your data
// value of the node can always change but the pointer...
// always points to the next object
// the final next is the tail and must point to null

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // O(1)
    // const newNode = {
    //   value: value,
    //   next: null,
    // };
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  // O(1)
  prepend(value) {
    // const newNode = {
    //   value: value,
    //   next: null
    // };
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    // check parameters
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    // traverse our list to find the insert node
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    if (!this.head.next) {
        return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
}
}

const myLinkedList = new LinkedList(100);
myLinkedList.append(200);
myLinkedList.append(300);
myLinkedList.prepend(400);
myLinkedList.insert(2, 500);
myLinkedList.remove(2);
myLinkedList.reverse()
console.log(myLinkedList.printList());

// Doubly Linked Lists allow us to traverse backwards
// You can start from the end and go backwards
// Searching/Lookup can be a little faster
// Because now you can pick where to start and go backwards
// Lookup is still O(n) but technically its O(n/2)
// Simplified it's still O(n) but its actually faster
// singly is still faster for insertion and deletion with limited memory
// deleting a previous node is easy in doubly list
// doubly requires more memory and storage

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new DoublyNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  // O(1)
  prepend(value) {
    const newNode = new DoublyNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    // check parameters
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new DoublyNode(value);
    // traverse our list to find the insert node
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    //console.log(this)
    return this;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return null; // Invalid index
    }

    const nodeToRemove = this.traverseToIndex(index);

    if (nodeToRemove.prev) {
      nodeToRemove.prev.next = nodeToRemove.next;
    } else {
      this.head = nodeToRemove.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    }

    if (nodeToRemove.next) {
      nodeToRemove.next.prev = nodeToRemove.prev;
    } else {
      this.tail = nodeToRemove.prev;
    }

    this.length--;

    return this.printList();
  }
}

const myDoublyLinkedList = new DoublyLinkedList(100);
myDoublyLinkedList.append(200);
myDoublyLinkedList.append(300);
myDoublyLinkedList.prepend(400);
myDoublyLinkedList.insert(2, 500);
myDoublyLinkedList.remove(2);
//console.log(myDoublyLinkedList.printList());
//console.log(myDoublyLinkedList);

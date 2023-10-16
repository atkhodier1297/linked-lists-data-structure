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
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(900)
console.log(myLinkedList);

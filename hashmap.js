class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  _hashFunction(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
  }

  insert(key, value) {
    const hashIndex = this._hashFunction(key);
    if (this.table[hashIndex] === undefined) {
      this.table[hashIndex] = new Node(key, value);
    } else {
      let node = this.table[hashIndex];
      while (node.next !== null) {
        if (node.key === key) {
          node.value = value; // Update value if the key already exists
          return;
        }
        node = node.next;
      }
      if (node.key === key) {
        node.value = value;
      } else {
        node.next = new Node(key, value);
      }
    }
  }

  get(key) {
    const hashIndex = this._hashFunction(key);
    let node = this.table[hashIndex];
    while (node !== null) {
      if (node.key === key) {
        return node.value;
      }
      node = node.next;
    }
    return null;
  }

  remove(key) {
    const hashIndex = this._hashFunction(key);
    let node = this.table[hashIndex];
    let prevNode = null;
    while (node !== null) {
      if (node.key === key) {
        if (prevNode === null) {
          this.table[hashIndex] = node.next;
        } else {
          prevNode.next = node.next;
        }
        return;
      }
      prevNode = node;
      node = node.next;
    }
  }
}

// Example usage
const hashTable = new HashTable(10);
hashTable.insert("apple", 5);
hashTable.insert("banana", 10);
hashTable.insert("orange", 15);
console.log(hashTable.get("apple")); // Output: 5
console.log(hashTable.get("banana")); // Output: 10
console.log(hashTable.get("orange")); // Output: 15
hashTable.remove("banana");
console.log(hashTable.get("banana")); // Output: null

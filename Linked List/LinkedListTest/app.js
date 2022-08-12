const LinkedList = require('./LinkedList')

const ll = new LinkedList.fromValues(10, 20, 30, 40);
ll.print();

// console.log(ll.getByIndex(0))
// console.log(ll.getByIndex(0).value)
// console.log(ll.getByIndex(2).value)

// ll.insertAtIndex(2, 60);
ll.removeAtIndex(2)
ll.print()
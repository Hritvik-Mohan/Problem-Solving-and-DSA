// Node class
class Node {
    constructor(data){
            this.data = data;
            this.previous = null;
            this.next = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    
    insertAtStart(data) {
        let newNode = new Node(data); // Create a new node
        newNode.next = this.head; // Set next node of new node to current head

        newNode.previous = null; // Set previous of new node as null

        // Update previous of head as new only if head is not null
        if(this.head != null) {
            this.head.previous = newNode;
        }
        this.head = newNode; // Update the head to the new node
        this.length++;
    }

    insertAtEnd(data) {
        let newNode = new Node(data); // Create a new node

        // if empty, create head
        if(this.head == null) {
            this.head = newNode;
            this.length++;
        } else {
            let current = this.head;
            // traverse till current.next != null;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode; // Set next of current node to new node
            newNode.previous = current; // Set previous of new node to current
            // Set next of new node to null as it is the last node
            newNode.next = null;
            this.length++;
        }
    }

    insertAtIndex(data, index) {
        // if first element
        if (index == 0) {
            this.insertAtStart(data);
        }
        // if out of range
        else if(index < 0 || index >= this.length) {
            console.log("Array index out of bound enter valid index");
        } else {
            let newNode = new Node(data); // Create a new node
            let current = this.head; // maintain current node
            let count = 0;

            // traverse till index - 1 as liked list has 0 based indexing
            while (count < index) {
                current = current.next;
                count++;
            }

            // Set previous of new node to previous of current node
            newNode.previous = current.previous;
            newNode.next = current;
            newNode.previous.next = newNode;
            current.previous = newNode;

            this.length++;
        }
    }

    getElement(index) {
        if (index < 0 || index >= this.length) {
            console.log("Array index out of bounds enter valid index");
        } else {
            let current = this.head;
            let count = 0;
            while (current) {
                if (count == index) {
                    console.log(current.data);
                }
                count++;
                current = current.next;
            }
        }
    }

    removeAtStart() {
        if (!this.head) {
            return false;
        }
        // store the current element to be deleted
        let current = this.head;
        // point current head to new head
        this.head = this.head.next;
        // set previous of new head to null
        this.head.previous = null;

        this.length--;
    }

    removeAt(index) {
        // if index = 0 implement removeAtStart()
        if (index == 0) {
            this.removeAtStart();
        } else if(index < 0 || index >= this.length) {
            console.log('Array index out of bound enter valid index');
        } else {
            let current = this.head;

            let count = 0;
            // Travere till count is index - 1;
            while (count < index) {
                count++;
                current = current.next;
            }
            // if previous element is not null
            if (current.previous != null) {
                current.previous.next = current.next;
                current.next.previous = current.previous;
            }
            // Set deleted current element to null
            current = null;
            this.length--;
        }
    }

    printLinkedList() {
        let current = this.head;

        // print till current exists or current is truthy i.e. current != null
        while (current) {
            console.log(current);
            // console.log(current.data);
            current = current.next; // update current to next node
        }
    }

    size() {
        console.log("Length of Doubly Linked List is "+this.length);
    }

}

let ll = new doublyLinkedList();

ll.insertAtStart(2);
// ll.printLinkedList();
ll.insertAtStart(5);
// ll.printLinkedList();
ll.insertAtStart(11);
// ll.printLinkedList();

ll.insertAtEnd(23);
// ll.printLinkedList();

ll.insertAtIndex(9, 2);
// ll.printLinkedList();

ll.getElement(0);
ll.printLinkedList();

ll.removeAtStart();
ll.printLinkedList();

ll.removeAt(2);
// ll.printLinkedList();

// ll.printLinkedList();
ll.size();




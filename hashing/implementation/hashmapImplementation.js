const { insertionSort } = require("dsa.js");

class Node {
    constructor(k, v) {
        this.key = k;
        this.value = v;
        this.next = null;
    }
}

class Hashmap {
    constructor() {
        this.currSize = 2; // current size of the array
        this.arr = [];
        this.lambda = 0.5;
        this.elements = 0; // no of elements inserted in the hashmap
        
        for(let i = 0; i < this.currSize; i++) {
            this.arr.push(null);
        }
    }

    hash(key) {
        let ans = 0;
        let c = 101;
        let m = this.currSize;
        let x = 1;
        for(let i = 0; i < key.length; i++) {
            ans = ((ans%m) + (key.charCodeAt(i)*x)%m)%m;
            x = x*c;
            // console.log(ans);
        }
        return ans;
    }

    insert(k, v) {
        if(this.search(k) !== undefined) {
            // then we just need to update
            let bucketIndex = this.hash(k);
            let temp = this.arr[bucketIndex];
            while(temp != null && temp.key != k) {
                temp = temp.next;
            }
            temp.value = v;
            return;
        }

        let bucketIndex = this.hash(k);
        let newNode = new Node(k, v);
        // add at head in ll
        newNode.next = this.arr[bucketIndex];
        this.arr[bucketIndex] = newNode;

        this.elements++;

        // check load factor
        let currLoadFactor = this.elements / this.currSize;
        if(currLoadFactor > this.lambda) {
            this.rehash();
        }

    }

    rehash() {
        this.elements = 0;
        let oldSize = this.currSize;
        this.currSize = 2*oldSize;
        let oldArray = this.arr;
        this.arr = [];
        for(let i = 0; i < this.currSize; i++) {
            this.arr.push(null);
        }
        for(let i = 0; i < oldArray.length; i++) {
            let temp = oldArray[i];
            while(temp != null) {
                this.insert(temp.key, temp.value);
                temp = temp.next;
            }
        }
    }

    search(key) {
        let bucketIndex = this.hash(key);
        let temp = this.arr[bucketIndex];
        while(temp != null) {
            if(temp.key == key) return temp.value;
            temp = temp.next;
        }
        return undefined;


        // for(let i = 0; i < this.arr.length; i++) {
        //     if(key == this.arr[key]) return true;
        //     else return false
        // }

        // console.log(this.key);
    }

    display() {
        console.log(this.arr);
    }
}

let hm = new Hashmap();
hm.insert("Sanket", 1);
// console.log("********");
// hm.display()
hm.insert("Sandeepan", 2);
// console.log("********");
// hm.display()
hm.insert("Sameer", 3);
// console.log("********");
// hm.display()
hm.insert("Varun", 4);
// console.log("********");
// hm.display()
hm.insert("Hritvik", 5);
// console.log("********");
// hm.display()
console.log(hm.search("Hritvik"));
hm.insert("Hritvik", 7);

// console.log(hm.search("Mousmi"));
console.log(hm.search("Hritvik"));
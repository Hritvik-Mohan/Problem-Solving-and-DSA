class Product {

    // constructor will be the first function to be called for creating an object
    constructor(n, p) {
        this.name = n;
        this.price = p;
    }

    // member functions
    displayProduct() {
        console.log("Name of this product is", this.name);
        console.log("Price of the product is", this.price);
    }

    buyProduct() {

    }
}

const iphone = new Product("Iphone", 100000); // calls the contructor to create obj
console.log(iphone); // prints the product
console.log(typeof iphone); // type of iphone is an object


// member functions can be called by . (dot) operator
iphone.displayProduct();
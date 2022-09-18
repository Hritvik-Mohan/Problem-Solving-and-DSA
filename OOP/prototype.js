class Product {
    constructor(n) {
        this.name = n;
    }
    display(msg) {
        console.log(this.name, msg);
    }
}

let d = new Product("iphone");
d.display("in stock");
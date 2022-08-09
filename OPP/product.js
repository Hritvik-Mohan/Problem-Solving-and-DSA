class product {
    constructor(n, p) {
        this.name = n;
        this.price = p;
    }

    display() {
        console.log(`The have ${this.name}, in the stock.`)
    }

    getPrice() {
        console.log(this.price);
    }

}

class sale extends product{
    constructor(s) {
        super();
        this.sale = s;
    }

    sale() {
        if(s == true) console.log(`This product: ${this.name} is on sale`);
    }
}

const obj1 = new product('Iphone', 100000);

const obj2 = new sale();

console.log(obj1);
obj1.getPrice(1000);
obj1.display();

obj2.sale(true);
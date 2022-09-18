var name = "I am in global";

// let customeScope = {
//     name: "Suhas",
//     printName: function() {
//         console.log(this);
//         console.log(this.name);
//     }
// }

// customeScope.printName();


let customeScope = {
    name: "Suhas",
    printName: () => {
        console.log(this);
        console.log(this.name);
    }
}

customeScope.printName();

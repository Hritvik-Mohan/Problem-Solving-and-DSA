const verifyCardModule = require("./verifyCard");

async function placeOrder() {
    // wait for this to finish before executing next statements.
    try{
        const result = verifyCardModule.verifyCard(2022);
        console.log(result);
    } catch(err) {
        console.log(err);
        return;
    }
    deductAmount();
}

function deductAmount(err){
    if(err){
        console.log(err);
    }else{
        console.log("Amount deducted");
    }
}

function otherFunction(){
    console.log("OK")
}

otherFunction()

placeOrder()
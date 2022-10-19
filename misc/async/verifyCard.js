module.exports.verifyCard = (year) => {

    const cardPromise = new Promise((success, failure) => {
        setTimeout(()=>{
            try {
                // throw new Error("Error while in promise")
                if(year>=2022) {
                    success("Verified");
                } else {
                    failure("Failed because card is expired");
                }
            } catch(ex) {
                console.log("error");
                console.log(ex);
                failure("Failed because of error");
            }
        }, 1000);
    });
    return cardPromise;
}
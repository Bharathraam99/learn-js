// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg() {
    if (this && this.hasOwnProperty('errMsg')) {
        console.error(this.errMsg);
    } else {
        console.log("No error message found in the object.");
    }
}

const exampleObject1 = {
    errMsg: "This is an error message for testing logMsg function."
};
const exampleObject2 = {
    testMsg: "This is an test message for testing logMsg function."
};

logMsg.call(exampleObject1);
logMsg.call(exampleObject2);

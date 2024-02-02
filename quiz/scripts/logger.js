// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg() {
    if(this.errMsg){
        console.log('Error Message: '+this.errMsg);
    }
    else{
        console.log('No Error Message Found');
    }
}

const withError = {
    errMsg: "THIS IS AN ERROR MESSAGE"
}

const withoutError = {
    noErrMsg: "THIS IS NOT AN ERROR MESSAGE"
}

logMsg.call(withError)
logMsg.call(withoutError)
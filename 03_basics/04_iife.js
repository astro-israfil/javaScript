/// Immediately Invoked Function Expression

const username = "Israfil";

(function immediatelyInvokedFunction() {
    console.log("DB Connected", username);
})();

(() => {
    console.log("DB Connected Two", username);
})()
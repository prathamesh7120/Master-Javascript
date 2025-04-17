
// Immediately Invoked  Function Experssion (IIFE)


(function chai() {
    console.log(`DB CONNECTED`); 
})();



(  (name) => {

    console.log(`DB CONNECTED ${name}`);
    

} )('prathamesh')
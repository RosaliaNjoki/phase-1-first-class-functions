function  receivesAFunction(spy){
    spy();
}
// function returnsANamedFunction () {
// returnsANamedFunction();

// }
function returnsANamedFunction(){
 return function named() {
console.log("");
 };
}
returnsANamedFunction();

 
 function returnsAnAnonymousFunction (){
    return() =>{
        console.log("");
    };
 }

returnsAnAnonymousFunction();

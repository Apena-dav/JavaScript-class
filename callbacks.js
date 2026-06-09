// callbacks - a function in another function to make the program finish one task before starting another
//used to read asynchronus functions


hello(goodbye)// this is the callback


function hello(callback){
    console.log("hello")
    callback()
}
//this is the function being called back, 
function goodbye(){
    console.log("goodbye")
}

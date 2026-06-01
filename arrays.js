fruits = ["ban", "coco", "rock"]

//fruits.push("cococb") ass an element to  the end
//.pop() to remove last element
//.unshift("") to add an element to the begining
//.shift() to remove element from the beginnig
//.length the length of an array
//.indexOf() returns the index of an element 
        //if it returns -1 then it is not present
//.sort to arrange alphabetically
//.reverse in reverse

//to loop through all elements
for(let i = 0; i < fruits; i++){
    console.log(fruits[i])
}
// shorter version
for(let fruit of fruits){
    console.log(fruit)
}

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

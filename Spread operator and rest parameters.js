// spread operator -- to unpack iterables

 let numbers = [1, 2, 3, 4, 5, 6]
 let name = "David"
 let letters = [...name].join("-")
 let fruits = ["apple", "orange"]
 let veggie = ["carrot", "onion"]

 let foods = [...fruits, ...veggie, "Eggs"]
 
 let maximum = Math.max(...numbers)

 console.log(maximum)
 console.log(foods)

//rest parametrs

//  rest parameters are useed as parameters for combining elements to arrays
//it can also contain anynumberof arguments 

function openfridge(...foods){
    console.log(foods)
}

food1 = "eba"
food2 = "rice"
food3 = "spagetti"
food4 = "meatpie"

openfridge(food1, food2, food3, food4) 


function sum(...numbers){
    let result = 0
    for(number in numbers){
        result += number;
    }  
    return result
}

const total = sum(1, 2, 3, 4, 5)
console.log(`the total is ${total}`)

//example 2 

function name(...names){
    return names.join(" ")
}

let fullName = name("Mr", "Apena", "David")
console.log(fullName)

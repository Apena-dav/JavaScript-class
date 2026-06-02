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


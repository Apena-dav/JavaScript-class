// javascript class

class Product{
    constructor(name, price){
        this.name =  name
        this.price = price
    }

    //no need towrite "function" here
    displayProduct(name, price){
        console.log(`Product: ${name}`)
        console.log(`Price: ${price}`)
    }
    calculateTax(sales){
        return this.price + (this.price * sales)
    }
}

const product1 = new Product("T-shirt", 1000)

product1.displayProduct()
const total = product1.calculateTax(sales)

console.log(`Total price (with tax: $${total.toFixed(2)})`)


type pizza = {
    name: string 
    price: number 
}
type order = {
    id: number 
    pizza: pizza
    status: string 
}

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni" , price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
    
]

let  cashInRegister = 100
let nextorderId = 1 
const orderQueue: order[] = []

function addNewpizza(pizzaobj: pizza ) {
    menu.push(pizzaobj)
}

function placeOrder(pizzaName: string ) {
    const selectedpizza = menu.find(pizzaobj => pizzaobj.name === pizzaName )
    if (!selectedpizza) {
        console.error(`${pizzaName} does not exist in the meenu `)
        return 
    }
    cashInRegister += selectedpizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedpizza, status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder

}

function completeOrder(orderId : number ) {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error (`${orderId} was not found in the orderQueue`)
        throw new Error()
    }
    order.status = "completed"
    return order 
}

addNewpizza({ name: "chicken " , price : 12})
addNewpizza({ name: " BBQ chicken " , price: 12})
addNewpizza({ name: " Spicy Halal Beef  " , price : 13})

placeOrder("Spicy Halal Beef")
completeOrder(1)
console.log("menu:", menu)
console.log("cash in register:", cashInRegister)
console.log ("order queue:", menu )
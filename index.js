const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni" , price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
    
]

const cashInRegister = 100
const nextOrderId = 1
const orderQueue = []

function addNewpizza(pizzaobj) {
    menu.push(pizzaobj)
}

function placeOrder(pizzaName) {
    const selectedpizza = menu.find(pizzaobj => pizzaobj.name === pizzaName )
    cashInRegister += selectedpizza.price
    const newOrder = {id: nextOrderId++, pizza: selectedpizza, status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder

}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order 
}

addNewpizza({ name: "chicken " , cost: 12})
addNewpizza({ name: " BBQ chicken " , cost: 12})
addNewpizza({ name: " Spicy Halal Beef  " , cost: 13})

placeOrder("Spicy Halal Beef")
completeOrder("1")
console.log("menu:", menu)
console.log("cash in register:", cashInRegister)
console.log ("order queue:", menu )

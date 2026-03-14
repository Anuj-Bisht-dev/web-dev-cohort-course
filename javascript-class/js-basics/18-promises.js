// function placedOrder(dish, callback) {
//     setTimeout(() => callback(null, { dish, status: "assigned" }), 2000);
// }
// function peparingOrder(order, callback) {
//     setTimeout(() => callback(null, { ...order, status: "preparing" }), 2000);
// }
// function orderPrepared(order, callback) {
//     setTimeout(() => callback(null, { ...order, status: "prepared" }), 2000);
// }

// // callback hell or piramid of doom
// placedOrder("Biryani", (error, order) => {
//     if (error) return console.log(error)
//     console.log(`Your order: ${order.status}`)

//     peparingOrder(order, (error, order) => {
//         if (error) return console.log(error)
//         console.log(`Your order: ${order.status}`)

//         orderPrepared(order, (error, order) => {
//             if (error) return console.log(error)
//             console.log(`Your ${order.dish}: ${order.status}`)
//         })
//     })
// })


// promises - pending, fullfilled, rejected states
function placedOrder(dish) {
    return new Promise((resolve, reject) => {
        if (!dish) {
            reject(new Error("didn't placed dish now..."));
            return
        }
        setTimeout(() => {
            console.log("the order is assigned");
            resolve({ dish, status: "assigned" });
        }, 1000);
    });
}

function peparingOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ ...order, status: "preparing" });
        }, 1000);
    });
}

function orderPrepared(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${order} is ready`);
            resolve({ ...order, status: "prepared" });
        }, 1000);
    });
}


placedOrder("Biryani")
    .then((order) => {
        console.log(order)
        peparingOrder(order)
    })

    .then((order) => {
        console.log(order)
        orderPrepared(order)
    })

    .catch(new Error("lol is didn't work. check again daddy... :)"));


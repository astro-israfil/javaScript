const cartProducts = [
    {
        name: "Apple Watch",
        price: 120,
    },
    {
        name: "Screen Protector Glass",
        price: 12,
    },
    {
        name: "Airpod",
        price: 150,
    },
    {
        name: "Wireless Charger",
        price: 99,
    },
]


const totalCartPrice = cartProducts.reduce((acc, item) => acc + item.price, 0);

console.log(totalCartPrice);
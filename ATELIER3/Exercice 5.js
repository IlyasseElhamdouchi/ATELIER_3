const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat",  price: 15 }
                               ];

const total = products.map(product => product.price * 1.25).reduce((sum, price) => sum + price, 0);

console.log("Prix total TTC :", total.toFixed(2));// Prix total TTC : 106.25


import { Product } from "./06-function-destructuring";
import { tax, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] =[
    {
        description: "Nokia",
        price: 100
    },
    {
        description: "iPad",
        price: 500
    }
];

const [resultTotal, resultTax] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

console.log(`Total: ${resultTotal}`);
console.log(`Tax: ${resultTax}`);
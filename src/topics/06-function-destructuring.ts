 export interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

const phone: Product = {
    description: 'Nokia',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad',
    price: 600.0
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    let total = 0;

    let {tax, products} = options;

    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart: Product[] = [phone, tablet];
export const tax: number = 0.15;

export const [resultTotal, resultTax] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

console.log(`Total: ${resultTotal}`);
console.log(`Tax: ${resultTax}`);

export {};
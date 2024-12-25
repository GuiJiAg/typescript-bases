interface Address {
    street: string;
    country: string;
    city: string;
}

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

const address: Address = {
    street: 'Main St',
    country: 'USA',
    city: 'NY'
};

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: address,
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const heroAddress = superHeroe.showAddress();
console.log(heroAddress);

export {};
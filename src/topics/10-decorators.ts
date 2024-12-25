function classDecorator<T extends {new(...args:any[]):{}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'overrride';
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'My Preperty';

    print() {
        console.log('Hola Mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);
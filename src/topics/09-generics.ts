export function whatsMyType<T>(argument: T): T {
    return argument;
}

const amIString: string = whatsMyType<string>('Hola Mundo');
const amINumber: number = whatsMyType<number>(100);

console.log(amIString);
console.log(amINumber);
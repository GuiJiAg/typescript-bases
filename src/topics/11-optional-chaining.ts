export interface Passenger {
    name: string,
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Guille',
};

const passenger2: Passenger = {
    name: 'Alejandro',
    children: ['Candela']
};

const printChildren = (passenger: Passenger): void => {
    const howmanyChildrens: number = passenger.children?.length||0;

    console.log(`${passenger.name} tiene ${howmanyChildrens} niños`);
}

printChildren(passenger1);
printChildren(passenger2);
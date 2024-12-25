function addNumbers(numberA: number, numberB: number): number {
    return numberA + numberB;
};

const addNumbersArrow = (numberA: number, numberB: number): string => {
    return `${numberA + numberB}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 5): number {
    return firstNumber * base;
}

const result: number = addNumbers(1, 2);
const arrowResult: string = addNumbersArrow(3, 4);
const multiplyResult: number = multiply(10);

console.log({result, arrowResult, multiplyResult});

/*********************************************** */
interface Character {
    name: string;
    hp: number;
    showHp: () => string;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
};

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        return `Puntos de vida de ${this.name}: ${this.hp}`;
    }
};

console.table(strider);
console.log(strider.showHp());

console.log(`Aumentando los hp de ${strider.name}...`);

healCharacter(strider, 10);

console.log(strider.showHp());

export {};
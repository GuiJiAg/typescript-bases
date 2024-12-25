interface Character {
    name: string;
    hpPoints: number;
    skills: string[];
    hometown?: string;
}

const skills: string[] = ['Bash', 'Counter', 'Healing'];
const strider: Character = {
    name: 'Strider',
    hpPoints: 100,
    skills: ['Bash', 'Counter'],
    //hometown: 'Gondor'
};

strider.hometown = 'Rivendell';

console.table(strider);

export {};
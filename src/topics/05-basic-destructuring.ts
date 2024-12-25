interface Details {
    author: string;
    year: number;
}

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Aqua",
    details: {
        author: "Lyrico",
        year: 2005
    }
}

const {
    audioVolume: audioPlayerVolume,
    song: audioPlayerSong,
    songDuration: audioPlayerSongDuration
} = audioPlayer;

const {
    author: authorSong,
    year: yearSong
} = audioPlayer.details;

console.log('Volume: ', audioPlayerVolume);
console.log('Song: ', audioPlayerSong);
console.log('Duration: ', audioPlayerSongDuration);
console.log('Author: ', authorSong);
console.log('Year: ', yearSong);

/*********************************************** */

const dbz: string[] = ['Goku', 'Vegeta', 'Piccolo'];
const p4: string = dbz[3] || 'No existe Personaje 4';

console.error(`Personaje 4: ${p4}`);

const [, , p3, yamcha = 'No existe Yamcha'] = ['Goku', 'Vegeta', 'Trunks'];

console.log(`Personaje 3: ${p3}`);
console.log(`Personaje Yamcha: ${yamcha}`);

export {};
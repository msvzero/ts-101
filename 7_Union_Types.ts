type HeroIdF = `${string}-${string}-${string}-${string}-${string}`;
//Union types
type HeroPowerScale = 1 | 2 | 3 | 4 | 5;

let valor1: number | string;

valor1 = 1;
valor1 = 'HI'

type Hero3 = {
    id?:HeroIdF
    name: string,
    age: number
    isActive?: boolean, //opcional
    poweScale: HeroPowerScale
}

const hero: Hero3 = {
    name: 'Batman',
    age: 30,
    // poweScale: 10
    poweScale: 5
}
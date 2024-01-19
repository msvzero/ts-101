type HeroCode = `${string}-${string}-${string}-${string}-${string}`;
//Union types
type HeroPower = 1 | 2 | 3 | 4 | 5;

type HeroBasicInfo = {
    name: string,
    age: number,
}


type HeroProperties = {
    id?:HeroCode
    isActive?: boolean, //opcional
    poweScale: HeroPower
}

type MyHero = HeroBasicInfo & HeroProperties;

const hero1: MyHero = {
    id: crypto.randomUUID(),
    name: 'Batman',
    age: 30,
    // poweScale: 10
    poweScale: 5
}
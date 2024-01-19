

type HeroId2 = `${string}-${string}-${string}-${string}-${string}`;

type Hero2 = {
    id?:HeroId2
    name: string,
    age: number
    isActive?: boolean //opcional
}


function createHero2(hero:Hero2): Hero2 {
    hero.isActive = true; //por defecto
    // hero.id = 1212;
    hero.id = crypto.randomUUID();
    return hero;
}

//Template union types
type HexaColor = `#${string}`;

// const color: HexaColor = '0033ff';
const color2: HexaColor = '#0033ff';
// let hero = {
//     name: 'thor',
//     age: 1500
// }


// // hero.power = 100;
// console.log(hero.name);

//Type Alias


type Hero = {
    id?:number
    name: string,
    age: number
    isActive?: boolean //opcional
}

// let hero : Hero = {
//     name: 'Thor',
//     age: 1000
// }

// function createHero(name:string, age:number): Hero {
//     return {name, age}
// }

// const myHero = createHero('Ironman', 45);


function createHero(hero:Hero): Hero {
    hero.isActive = true; //por defecto
    hero.id = 1212;
    return hero;
}

const myHero = createHero({name:'Ironman', age: 45})
const myHero2 = createHero({name:'Ironman', age: 45, isActive: true})

// myHero.id =12312312312312


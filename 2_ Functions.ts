function saludar (name: string) {
    console.log(`Hello ${name.toLocaleUpperCase}`);
}

saludar('Juan');
// saludar(1)


//Objetos
function hello (persona: {name: string, age: number}) {
    const {name, age} = persona;
    console.log(`Hole ${name}, tienes ${age}`);

}

hello({name: 'Juan', age: 45})
// hello({name: 'Juan', age: '45'})

function hello2 ({name, age}: {name:string, age: number}) {
    console.log(`Hole ${name}, tienes ${age}`);
}

hello2({name: 'Juan', age: 45})
// hello2({name: 'Juan', age: '45'})


//Callbacks
const sayHiFromFunction = (fn: (name:string) => void) => {
    fn('Juan');
}

const sayHi = (name:string) => {
    console.log(`Hola ${name}`);
}

sayHiFromFunction(sayHi);

//Tipado de arrow function
const sumar  = (a: number, b:number): number => {
    return a + b;
}

const restar: (a:number, b: number) => number = (a, b) => {
    return a - b;
}

//never
function throwError (message: string) {
    throw new Error(message);
}

//inferencia en funciones anonimas segun el contexto
const avengers = ['Spidey', 'Hulk', 'Ironman'];

avengers.forEach((avenger) => {
    console.log(avenger)
});

avengers.map((avenger) => {
    console.log(avenger)
})


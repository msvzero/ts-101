const address = {
    planet: 'Earth',
    city: 'Madrid'
}

type MyAddress  = typeof address;

const youtubeAddress: MyAddress = {
    planet: 'Earth',
    city: 'Madrid' 
}


//Type from a function
function getUserInfo (id: number) {
    return {
        id,
        username: 'jose'
    }}

type User = ReturnType<typeof getUserInfo>;

const user: User = {
    id: 1,
    username: 'jose'
}
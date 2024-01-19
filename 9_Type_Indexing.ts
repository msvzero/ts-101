//Type indexing
type HeroProperties = {
    isActive: boolean;
    address:{
        planet:string,
        city:string
    }
}

const addressHero: HeroProperties['address'] = {
    planet:'Earth',
    city:'New York'
}
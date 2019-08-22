export interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    //address: Address;
    phone: String;
    website: string;
    //company: Company;
}

export interface Address{
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: Geolocation;
}

export interface Geolocation{
    lat: number; 
    lng: number;
}

export interface Company{
    name: string;
    catchPhrase: string;
    bs: string;
}
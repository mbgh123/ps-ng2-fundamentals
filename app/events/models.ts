export interface IEvent {
    id: string,
    name: string,
    date: string,
    time: string,
    price: number,
    imageUrl: string,
    location : {
        address: string,
        city: string,
        country: string
    }
}


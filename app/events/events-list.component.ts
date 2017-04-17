import { Component } from '@angular/core'
import { IEvent } from './models'

@Component({
    selector: 'events-list',
    template: `
            <div>
            <h1>Upcoming events</h1>
            <hr>
            <event-thumbnail [event]="event1"></event-thumbnail>   
            <event-thumbnail [event]="event1"></event-thumbnail>                 
            </div>
    `
})
export class EventsListComponent {
    event1 :IEvent = {
        id: '1',
        name: 'Angular connect',
        date: '1/1/2017',
        time: '10:00am',
        price: 599.99,
        imageUrl: 'app/assets/images/angular-connect-shield.png',
        location: {
            address: '1 street',
            city: 'London',
            country: 'england'
        }
    }
}
import { Component, Input } from "@angular/core"
import { EventsListComponent } from './events/events-list.component'

@Component({
    selector: 'events-app',
    template: `
        <h2>EventsAppComponent</h2>
        
        <events-list></events-list>       

        <parent-comp></parent-comp> 
        `
})
export class EventsAppComponent {

    constructor(){

    }
}
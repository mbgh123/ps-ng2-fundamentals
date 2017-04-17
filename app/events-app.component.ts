import { Component, Input } from "@angular/core"
import { EventsListComponent } from './events/events-list.component'

@Component({
    selector: 'events-app',
    template: `
        <h2>Hello World again again {{ user }} End</h2>
        <events-list></events-list>        
        `
})
export class EventsAppComponent {

@Input()
user: string

constructor(){
    console.log('user = ' + this.user)
}

}
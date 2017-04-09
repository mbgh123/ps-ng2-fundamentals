import { Component, Input } from "@angular/core"

@Component({
    selector: 'events-app',
    template: `<h2>!Hello World again again {{ user }} End</h2>`
})
export class EventsAppComponent {

@Input()
user: string

constructor(){
    console.log('user = ' + this.user)
}
}
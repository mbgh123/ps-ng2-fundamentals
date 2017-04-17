import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './models'

@Component({
  selector: 'event-thumbnail',
  template: `
          <div class="well hoverwell thumbnail">
        <h2>{{ event.name}}</h2>
        <div>Date: {{ event.date}}</div>
        <div>Time: {{ event.time}}</div>
        <div>Price: {{ event.price}}</div>        
        <div>
            <span>Location {{ event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{ event.location.city}}, {{ event.location.country}}</span>
        </div>
        <button class="btn btn-primary" (click) = "handleClickMe()" >Button</button>
    </div>            
  `
})
export class EventThumbnailComponent{
    
    @Input() event: IEvent

    @Output() eventChildClick = new EventEmitter()

    handleClickMe(){
        console.log('Clicked')
        this.eventChildClick.emit( this.event.name )
    }
}
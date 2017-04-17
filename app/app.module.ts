import { NgModule } from "@angular/core"

import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent} from './events-app.component'
import { EventsListComponent} from './events/events-list.component'
import { ParentComponent } from './parent-child/parent-comp'
import { ChildComponent } from './parent-child/child-comp'


@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent, 
        ParentComponent, 
        ChildComponent] ,
    bootstrap: [ParentComponent]
})
export class AppModule {

}
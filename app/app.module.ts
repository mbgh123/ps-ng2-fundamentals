import { NgModule } from "@angular/core"

import { BrowserModule } from '@angular/platform-browser'
//import { EventsAppComponent} from './events-app.component'
import { ParentComponent } from './parent-comp'
import { ChildComponent } from './child-comp'


@NgModule({
    imports: [BrowserModule],
    declarations: [
        //EventsAppComponent, 
        ParentComponent, 
        ChildComponent] ,
    bootstrap: [ParentComponent]
})
export class AppModule {

}
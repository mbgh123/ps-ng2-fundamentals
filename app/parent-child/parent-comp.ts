import { Component, Input } from "@angular/core"
import { EventsAppComponent} from "../events-app.component"

@Component({
    selector: 'parent-comp',
    template: `
            <div>
                <h1>Parent Comp</h1>            
                <child-comp [parentDataInput]= "parentData"></child-comp>

                <events-app></events-app>
            </div>`
})
export class ParentComponent {

parentData: string

    constructor(){
        this.parentData = "parentDataValue"
        console.log('PARENT: parentData = ' + this.parentData)
    }
}
import { Component, Input } from "@angular/core"

@Component({
    selector: 'parent-comp',
    template: `
            <div>Parent Comp
                <child-comp [parentDataInput]= "parentData"></child-comp>
            </div>`
})
export class ParentComponent {

parentData: string

    constructor(){
        this.parentData = "parentDataValue"
        console.log('PARENT: parentData = ' + this.parentData)
    }
}
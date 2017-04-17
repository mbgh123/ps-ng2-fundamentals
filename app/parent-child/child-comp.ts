import { Component, Input, OnInit } from "@angular/core"

@Component({
    selector: 'child-comp',
    template: `
            <div>Child Comp
                <div>input from parent = {{ parentDataInput }}</div>
            </div>`
})
export class ChildComponent implements OnInit {

@Input()
parentDataInput: string

    constructor(){
        console.log('CHILD: parentDataInput = ' + this.parentDataInput)
    }

    ngOnInit(){
        console.log('CHILD OnInit: parentDataInput = ' + this.parentDataInput)
        
    }
}
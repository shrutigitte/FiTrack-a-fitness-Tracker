import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterLink, RouterOutlet } from "@angular/router";
import { DemoMgZorroandModule } from "./DemoMgZorroandModule";

@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        DemoMgZorroandModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterLink,RouterOutlet
    ],
    exports:[
        CommonModule,
        DemoMgZorroandModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterLink,RouterOutlet
    ]
})
export class SharedModule{}
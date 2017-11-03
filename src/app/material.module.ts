import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule
    /*MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule*/,
} from "@angular/material";

import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        FlexLayoutModule,
        MatGridListModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        FlexLayoutModule,
        MatGridListModule,
    ],
    declarations: []
})
export class MaterialModule { }

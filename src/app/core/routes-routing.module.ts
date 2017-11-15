import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CoverLetterComponent } from "../cover-letter/cover-letter.component";
import { NotFoundComponent } from "./not-found.component";
import { AppComponent } from "../app.component";
import { ResumeComponent } from "../resume/resume.component";

const routes: Routes = [
    { path: "cover-letter", component: CoverLetterComponent },
    { path: "resume", component: ResumeComponent },
    { path: "", component: ResumeComponent },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes
        )
    ],
    exports: [RouterModule]
})
export class RoutesRoutingModule { }

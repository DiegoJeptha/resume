import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";
import { RoutesRoutingModule } from "./core/routes-routing.module";

import { AppComponent } from "./app.component";
import { CoverLetterComponent } from "./cover-letter/cover-letter.component";
import { NotFoundComponent } from "./core/not-found.component";
import { ResumeComponent } from "./resume/resume.component";

@NgModule({
  declarations: [
    AppComponent,
    CoverLetterComponent,
    NotFoundComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    RoutesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CoverLetterComponent } from "./cover-letter/cover-letter.component";

@NgModule({
  declarations: [
    AppComponent,
    CoverLetterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

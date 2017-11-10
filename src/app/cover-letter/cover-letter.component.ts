import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AboutMeInterface } from "../about-me-interface";
import { ContactInterface } from "../contact-interface";

@Component({
  selector: "app-cover-letter",
  templateUrl: "./cover-letter.component.html",
  styleUrls: ["./cover-letter.component.css"]
})
export class CoverLetterComponent implements OnInit {

  name: string;
  aboutMe: AboutMeInterface;
  contact: ContactInterface;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("./assets/about-me.json")
      .toPromise()
      .then(response => {
        this.aboutMe = response as AboutMeInterface;
      });

    this.http.get("./assets/contact.json")
      .toPromise()
      .then(response => {
        this.contact = response as ContactInterface;
      });
  }

}

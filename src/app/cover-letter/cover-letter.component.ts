import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ContactInterface } from "../contact-interface";
import { ConverLetterInterface } from "./cover-letter-interface";

@Component({
  selector: "app-cover-letter",
  templateUrl: "./cover-letter.component.html",
  styleUrls: ["./cover-letter.component.css"]
})
export class CoverLetterComponent implements OnInit {

  contact: ContactInterface;
  coverLetterContent: ConverLetterInterface;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("./assets/contact.json")
      .toPromise()
      .then(response => {
        this.contact = response as ContactInterface;
      });

    this.http.get("./assets/cover-para.json")
      .toPromise()
      .then(response => {
        this.coverLetterContent = response as ConverLetterInterface;
      });
  }

}

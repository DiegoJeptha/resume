import { Component, OnInit } from "@angular/core";

import { Contact, Address, Digital, Phone } from "../contact.class";

@Component({
  selector: "app-cover-letter",
  templateUrl: "./cover-letter.component.html",
  styleUrls: ["./cover-letter.component.css"]
})
export class CoverLetterComponent implements OnInit {

  name = "Ben Zundel";
  contact: Contact;

  constructor() { }

  ngOnInit() {
    // this.contact = new Contact();
  }

}

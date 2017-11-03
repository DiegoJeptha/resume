import { Component, OnInit } from "@angular/core";

import { Contact, Address, Digital, Phone } from "./contact.class";
import { Skill } from "./skills.class";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {
  name = "Ben Zundel";

  sections = ["Summary", "Skills", "Experience", "Education", "References"];

  summaryText = "I am a technical professional who has worked as a developer, \
    a business professional and a system architect. I know I'd be a valuable addition to \
    your organization as I've been a manager, a technical leader and at all times a \
    programmer.";

  skillText = "As a technical lead, I have 10+ years of experience working with enterprise Java with an Oracle database. \
    My role at RPM Technologies comprises of technical management, design and development, and mentoring.\
    I've remained current and up to date on trends in Java development and in my spare time I develop projects to stay relevant with \
    modern web development. My present expertise has been to steer the company to service oriented architecture and\
    swtiching to a sign-on authentication model.";

  skillList: Skill[];

  contact: Contact;

  ngOnInit(): void {
    this.skillList = [new Skill("Languages", ["Java", "Javascript", "Python", "PL/SQL", "Typescript", "bash"])];
    this.skillList.push(new Skill("Databases", ["Oracle", "MySql", "SQLServer", "Mongodb", "SQLite"]));
    this.skillList.push(new Skill("Frameworks/Web", ["Nodejs", "Angular 1 & 4", "Flask", "Django", "React",
      "Bootstrap", "JQuery", "SaSS"]));
    this.skillList.push(new Skill("Enterprise", ["SVN", "Git", "UML", "Websphere", "MQueue", "SOAP", "Rational Suite"]));

    const address = new Address("25 Goodfellow St.", "", "L1P1C3", "Whitby", "Ontario");
    const phone = new Phone("905-550-8735", "289-600-8136");
    const digital = new Digital("bendzundel@gmail.com", "https://github.com/wildpyro", "homepage");

    this.contact = new Contact(address, digital, phone);

  }
}

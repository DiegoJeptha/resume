import { Component, OnInit } from "@angular/core";
import { MatIconRegistry } from "@angular/material";

import { Contact, Address, Digital, Phone } from "./contact.class";
import { Skill } from "./skills.class";
import { Workhistory } from "./workhistory.class";
import { Education } from "./education.class";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {
  name = "Ben Zundel";
  contact: Contact;

  sections = ["Summary", "Skills", "workhistory", "Education", "References"];

  summaryText = "I am a technical professional who has worked as a developer, \
    a business professional and a system architect. I know I'd be a valuable addition to \
    your organization as I've been a manager, a technical leader and at all times a \
    programmer.";
  skillText = "As a technical lead, I have 10+ years of workhistory working with enterprise Java with an Oracle database. \
    My role at RPM Technologies comprises of technical management, design and development, and mentoring.\
    I've remained current and up to date on trends in Java development and in my spare time I develop projects to stay relevant with \
    modern web development. My present expertise has been to steer the company to service oriented architecture and\
    swtiching to a sign-on authentication model.";
  skillList: Skill[];

  interest: "See my github for these projects \
    Currently using Angular and Node.js to upgrade a web based stock portfolio from an access database. \
    Used a raspberry Pi, Node.js and Typescript to build an aeroponics lab that dispenses monitors and maintains a soil-less garden. \
    Currently pursuing Oracle accreditation for Java.";

  workhistories: Workhistory[];
  educations: Education[];
  /*
    constructor(http: Http, iconReg: MatIconRegistry, sanitizer: DomSanitizer) {
      iconReg.addSvgIcon("github", sanitizer.bypassSecurityTrustResourceUrl("../assets/github-circle.svg"));
    }
  */
  ngOnInit(): void {
    this.skillList = [new Skill("Languages", ["Java", "Javascript", "Python", "PL/SQL", "Typescript", "bash"])];
    this.skillList.push(new Skill("Databases", ["Oracle", "MySql", "SQLServer", "Mongodb", "SQLite"]));
    this.skillList.push(new Skill("Frameworks/Web", ["Nodejs", "Angular 1 & 4", "Flask", "Django", "React",
      "Bootstrap", "JQuery", "Sass"]));
    this.skillList.push(new Skill("Enterprise", ["SVN", "Git", "UML", "Websphere", "MQueue", "SOAP", "Rational Suite"]));

    const address = new Address("25 Goodfellow St.", "", "L1P1C3", "Whitby", "Ontario");
    const phone = new Phone("905-550-8735", "289-600-8136");
    const digital = new Digital("bendzundel@gmail.com", "https://github.com/wildpyro", "homepage");

    this.contact = new Contact(address, digital, phone);

    this.workhistories = [new Workhistory("RPM Technologies", "Technical Lead", "Toronto, Ontario", "2012-present",
      "I was promoted to the role of Technical Lead at RPM in 2012. Responsibilities include designing and architecting \
      large or core projects, reviewing and approving design documents from other developers, performing code reviews, \
      approving code changes, working with support, QA, and business groups to ensure that business requirements were met \
      on time and with quality, and serve as a client facing subject matter expert and solution architect. My primary role \
      is developing PL/SQL and Java solutions to meet client requirements. I am currently leading the development on a schema \
      conversion process that will move one of the major banks in Canada from a legacy database to a more modern one.",

      "Developed coding standards and enforcement through a code review system. Currently a subject matter expert for \
      Register products (RESP, RDSP, TFSA), taxation and mutual fund processing. Quickly advanced to a leadership position \
      in the organization. Completed a twelve month, on - site agreement where responsibilities included developing and \
      training business analysts in developing their own SQL queries."
    )];

    this.workhistories.push(new Workhistory("RPM Technologies", "Team Lead", "Toronto, Ontario", "2009-2011",
      "Responsibilities included assigning work to the team, reviewing code and ensuring deadlines were met in addition \
      to individual coding tasks. I also joined a management training group and was responsible for hiring new employees",

      "Managed a group of 4 developers. Responsible for managing the RESP and RDSP plan types for Schedule 1 and 2 banks and \
      various brokerages. Became the de-facto subject matter expert for those plan types and was involved in client support and conversion."
    ));

    this.workhistories.push(new Workhistory("RPM Technologies", "Developer", "Toronto, Ontario", "2006-2009", "", ""));

    this.educations = [new Education("Canadian Securities Institute", "Canadian Securities Course", "2010",
      "Provided for a strong understanding of the financial industry which applied to both my professional and personal life.")];

    this.educations.push(new Education("Canadian Securities Institute", "Investment Funds In Canada", "2011", "An extension of the CSC \
    with a more mutual fund centric scope"));

    this.educations.push(new Education("University of Toronto", "Honours Bachelor’s Degree", "2006", "Majored in History with a minor \
    in English and Classical studies."));

  }
}

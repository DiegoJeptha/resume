import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AboutMeInterface } from "./about-me-interface";
import { ContactInterface } from "./contact.class";
import { SkillInterface, SkillListInterface } from "./skills.class";
import { WorkhistoryInterface } from "./workhistory.class";
import { EducationInterface } from "./education.class";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {
  name: string;
  contact: ContactInterface;
  aboutMe: AboutMeInterface;
  skillText: string;
  skillList: SkillListInterface[];
  workhistories: WorkhistoryInterface[] = [];
  educations: EducationInterface[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("./assets/about-me.json")
      .toPromise()
      .then(response => {
        this.aboutMe = response as AboutMeInterface;
      });

    this.http.get("./assets/skill-list.json")
      .toPromise()
      .then(response => {
        const res = response as SkillInterface;
        this.skillText = res.skillText;
        this.skillList = res.skills;
      });

    this.http.get("./assets/contact.json")
      .toPromise()
      .then(response => {
        this.contact = response as ContactInterface;
      });

    this.http.get("./assets/workhistory.json")
      .toPromise()
      .then(response => {
        this.workhistories = response as WorkhistoryInterface[];
      });

    this.http.get("./assets/education.json")
      .toPromise()
      .then(response => {
        this.educations = response as EducationInterface[];
      });
  }
}

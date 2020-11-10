import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: string[] = [
    "MAX Technical Training 12.2020",
    "Sinclair",
    "Homeschooled"
   ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExperience: any[] = [
    {role:"Reinsurance-Coordinator",
    company:"Ameritas",
    duration:"2019-2020",
    tasks:"Created Program to teach interns and new employees company processes."},
   
   {role: "Licensing-Representative",
   company: "Ameritas",
   duration: "2018-2019",
   tasks: "Improved processes to easily onboard new sales representatives."},
  
   {role: "Impressions-Coordinator",
   company: "Matson Money",
    duration:"2016-2018",
   tasks:"Created new filing system for whole company."}

    
   ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-cv-angular';
  name: string = "Kali Correll";
  address: string = "3131 Plainfield Rd";
  city: string = "Cincinnati";
  state: string = "Ohio";
  zip: string = "45237";
  phoneNumber: number = 513-222-7878;
  email: string = "kalicorrell@gmail.com";
   workExperience: string[] = [
    "Reinsurance Coordinator",  //| Ameritas |  2019 - 2020 Created Program to teach interns and new employees company processes.",
    "Field and Licensing Representative", // | Ameritas | 2018 - 2019 | Improved processes to easily onboard new sales representatives.",
    "First Impressions Coordinator", // | Matson Money | 2016 - 2018 | Created new filing system for whole company."
   ];
   education: string[] = [
    "MAX Technical Training 12.2020"
   ];
}

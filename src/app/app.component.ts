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
  displayEducation: boolean = true;
   
}

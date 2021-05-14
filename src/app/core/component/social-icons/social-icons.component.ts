import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent implements OnInit {

  private iconsLocalPath = 'assets/images/social-icons/';
  socialAccounts = [
    { name: 'linkedin', icon: this.iconsLocalPath + 'linkedin.svg', url: 'https://www.linkedin.com/in/bastien-mathias-b7025559/'},
    { name: 'github', icon: this.iconsLocalPath + 'github.svg', url: 'https://github.com/Substitut'},
    { name: 'google', icon: this.iconsLocalPath + 'google.svg', url: 'https://developers.google.com/profile/u/108753012108836853255'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

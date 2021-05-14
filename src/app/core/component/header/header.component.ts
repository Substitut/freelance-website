import {Component, HostListener, OnInit} from '@angular/core';
import {UtilsService} from '../../../shared/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMobile = false;

  constructor() {
    this.isMobile = UtilsService.isMobile(window.innerWidth);
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isMobile = UtilsService.isMobile(window.innerWidth);
  }

}

import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {UtilsService} from '../../../shared/services/utils.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit, OnDestroy {

  private _onDestroy = new Subject();
  private currentUrl: string;

  isMobile = false;
  menu = [
    {name: 'Home', url: 'home'},
    {name: 'Projects', url: 'projects'},
    {name: 'Services', url: 'services'},
    {name: 'Blog', url: 'blog'},
    {name: 'Contact', url: 'contact'},
  ];
  selectedMenu: any;
  menuOpen = true;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    this.selectedMenu = this.menu.find(item => this.isMenuSelected(item.url));
    this.isMobile = UtilsService.isMobile(window.innerWidth);

    this.router.events.pipe(filter((event: any): event is NavigationEnd => event instanceof NavigationEnd),
      takeUntil(this._onDestroy)).subscribe((e: NavigationEnd) => {
      this.currentUrl = e.urlAfterRedirects;
      this.selectedMenu = this.menu.find(item => this.isMenuSelected(item.url));
    });
  }

  isMenuSelected(url: string): boolean {
    return this.currentUrl.startsWith('/' + url);
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isMobile = UtilsService.isMobile(window.innerWidth);
  }

}

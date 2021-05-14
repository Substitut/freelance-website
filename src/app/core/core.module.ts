import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { MainMenuComponent } from './component/main-menu/main-menu.component';
import { HeaderComponent } from './component/header/header.component';
import { SocialIconsComponent } from './component/social-icons/social-icons.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    MainMenuComponent,
    HeaderComponent,
    SocialIconsComponent
  ],
  imports: [
    SharedModule,
    MatButtonModule
  ],
  exports: [
    MainMenuComponent,
    HeaderComponent,
    BrowserAnimationsModule
  ]
})
export class CoreModule { }

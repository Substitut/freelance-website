import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }

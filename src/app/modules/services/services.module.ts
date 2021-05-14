import { NgModule } from '@angular/core';

import { ServicesRoutingModule } from './services-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }

import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }

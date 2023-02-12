import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SugarMillFactoryRoutingModule } from './sugar-mill-factory-routing.module';
import { SugarMillFactoryConfigurationComponent } from './sugar-mill-factory-configuration/sugar-mill-factory-configuration.component';


@NgModule({
  declarations: [
    SugarMillFactoryConfigurationComponent
  ],
  imports: [
    CommonModule,
    SugarMillFactoryRoutingModule
  ]
})
export class SugarMillFactoryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsTabComponent } from './collections-tab/collections-tab.component';


@NgModule({
  declarations: [
    CollectionsTabComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ], 
  exports: []
})
export class CollectionsModule { }

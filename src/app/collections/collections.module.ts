import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsTabComponent } from './collections-tab/collections-tab.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CollectionsTabComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ], 
  exports: []
})
export class CollectionsModule { }

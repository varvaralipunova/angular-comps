import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsTabComponent } from './collections-tab/collections-tab.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    CollectionsTabComponent,
    TableComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ], 
  exports: []
})
export class CollectionsModule { }

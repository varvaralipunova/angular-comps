import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsTabComponent } from './collections-tab/collections-tab.component';

const routes: Routes = [{path:'collections', component:CollectionsTabComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }

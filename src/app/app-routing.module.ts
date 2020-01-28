import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatalistComponent } from './datalist/datalist.component';

const routes: Routes = [
  { path: 'datalist', component: DatalistComponent },
  { path: '**', redirectTo: 'datalist' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

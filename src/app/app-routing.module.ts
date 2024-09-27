import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleParentComponent } from './sample-parent/sample-parent.component';

const routes: Routes = [
  { path: '', redirectTo: 'sample-parent', pathMatch: 'full' },
  { path: 'sample-parent', component: SampleParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

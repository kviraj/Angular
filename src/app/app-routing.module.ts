import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', component: EnquiryComponent },
  { path: 'enq2', component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

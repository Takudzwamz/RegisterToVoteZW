import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PoliciesComponent } from './policies/policies.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'portfolio',
    component: PoliciesComponent,
  },
  {
    path: 'contact_me',
    component: ContactUsComponent,
  },
  {
    path: '**', redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

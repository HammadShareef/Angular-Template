import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {DetailComponent} from './detail/detail.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesDetailComponent } from './properties-detail/properties-detail.component';
import { OurAgentComponent } from './our-agent/our-agent.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Agencies', component: AgenciesComponent },
  { path: 'Contact', component: ContactUsComponent },
  { path: 'Detail/:id', component: DetailComponent },
  { path: 'Properties', component: PropertiesComponent },
  { path: 'Detail/:id/PropertiesDetail', component: PropertiesDetailComponent},
  { path: 'Detail/:id/Agent', component: OurAgentComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

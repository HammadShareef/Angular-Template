import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { PropertiesComponent } from './properties/properties.component';
import { OurAgentComponent } from './our-agent/our-agent.component';
import { PropertiesDetailComponent } from './properties-detail/properties-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AgenciesComponent,
    HomeComponent,
    ContactUsComponent,
    DetailComponent,
    PropertiesComponent,
    OurAgentComponent,
    PropertiesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

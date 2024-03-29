import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HandSComponent } from './components/hand-s/hand-s.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AcercadeEditComponent } from './components/acercade/acercade-edit.component';
import { ExperienciaNewComponent } from './components/experiencia/experiencia-new.component';
import { ExperienciaEditComponent } from './components/experiencia/experiencia-edit.component';
import { EducacionEditComponent } from './components/educacion/educacion-edit.component';
import { EducacionNewComponent } from './components/educacion/educacion-new.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HandSComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AcercadeEditComponent,
    ExperienciaNewComponent,
    ExperienciaEditComponent,
    EducacionEditComponent,
    EducacionNewComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

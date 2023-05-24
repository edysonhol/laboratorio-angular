import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { VentanasConfirmacionComponent } from './ventanas-confirmacion/ventanas-confirmacion.component';
import { TablaComponent } from './tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FormularioRegistroComponent,
    VentanasConfirmacionComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

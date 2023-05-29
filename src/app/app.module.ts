import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccoladeListComponent } from './accolade-list/accolade-list.component';
import { PersonnelComponent } from './components/personnel/personnel/personnel.component';
import { PersonnelListComponent } from './components/personnel/personnel-list/personnel-list.component';
import { DetPersonnelComponent } from './detailles/det-personnel/det-personnel.component';
import { MenuComponent } from './menu/menu/menu.component';
import { DemandemutationListComponent } from './components/demande-mutation/demandemutation-list/demandemutation-list.component';
import { DemandemutationAjoutComponent } from './components/demande-mutation/demandemutation-ajout/demandemutation-ajout.component';
import { DemandemutationDetailleComponent } from './components/demande-mutation/demandemutation-detaille/demandemutation-detaille.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FormsModule  } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AccoladeListComponent,
    PersonnelComponent,
    PersonnelListComponent,
    DetPersonnelComponent,
    MenuComponent,
    HomeComponent,
    DemandemutationListComponent,
    DemandemutationAjoutComponent,
    DemandemutationDetailleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    NgxFileDropModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnelListComponent } from './components/personnel/personnel-list/personnel-list.component';
import { DetPersonnelComponent } from './detailles/det-personnel/det-personnel.component';
import { DemandemutationAjoutComponent } from './components/demande-mutation/demandemutation-ajout/demandemutation-ajout.component';
import { HomeComponent } from './home/home.component';
import { DemandemutationListComponent } from './components/demande-mutation/demandemutation-list/demandemutation-list.component';
import { AccoladeListComponent } from './accolade-list/accolade-list.component';

const routes: Routes = [


  {path:'personnel',component: PersonnelListComponent,children:[
    {path:'personnel/detaille-personnel/:id',component:DetPersonnelComponent}
  ]},
  
  {path:'demandeMutation',component:DemandemutationListComponent},
  {path:'detaille-personnel/:id',component:DetPersonnelComponent},

  {path: 'home', component: HomeComponent },
  {path:'accolade',component:AccoladeListComponent},

  {path:'' ,redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

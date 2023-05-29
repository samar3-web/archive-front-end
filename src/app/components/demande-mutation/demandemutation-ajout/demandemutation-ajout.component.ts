import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Demandemutation } from 'src/app/classes/demandemutation';
import { Personnel } from 'src/app/classes/personnel';
import { PersonnelService } from 'src/app/services/personnel.service';



@Component({
  selector: 'app-demandemutation-ajout',
  templateUrl: './demandemutation-ajout.component.html',
  styleUrls: ['./demandemutation-ajout.component.css'],
})
export class DemandemutationAjoutComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
}

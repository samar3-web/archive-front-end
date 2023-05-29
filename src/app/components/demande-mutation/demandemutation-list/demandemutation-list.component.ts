import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Demandemutation } from 'src/app/classes/demandemutation';
import { Personnel } from 'src/app/classes/personnel';
import { DemandemutationService } from 'src/app/services/demandemutation.service';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-demandemutation-list',
  templateUrl: './demandemutation-list.component.html',
  styleUrls: ['./demandemutation-list.component.css']
})
export class DemandemutationListComponent {
 
  personnel: Personnel = {};
  personnelList: Personnel[] = [];


  demandeMutation: Demandemutation = new Demandemutation();
  selectedFile: File | null = null;
  progress = 0;
  message = '';


  

  constructor(private demandeMutationService: DemandemutationService,private personnelService:PersonnelService,private router:Router) { }

  ngOnInit(): void {
    this.getPersonnelList();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  createDemandeMutation(): void {
    
    

    this.demandeMutationService.createDemandeMutation(this.demandeMutation).subscribe(
      (response: any) => {
        console.log(response);
        this.message = 'Demande Mutation created successfully.';
        this.progress = 0;
        this.demandeMutation = new Demandemutation();
      },
      (error: any) => {
        console.error(error);
        this.message = 'Error creating Demande Mutation.';
        this.progress = 0;
      }
    );
  }
  


  getPersonnelList(): void {
    this.personnelService.getPersonnelList().subscribe(
      (personnelList) => {
        this.personnelList = personnelList;
      },
      (error) => {
        console.log(error);
        // Handle the error response
      }
    );
  }

  

}

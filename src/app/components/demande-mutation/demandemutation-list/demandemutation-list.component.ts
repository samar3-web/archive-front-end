import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
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
 
  selectedPersonnel!: Personnel ;
  personnelList: Personnel[] = [];

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  cause! : string ;
  decision! : string ;
  datedemande! : string;

  fileInfos?: Observable<any>;

  demande :Demandemutation = {
    cause:'',
    decision:'',
    personnel:{
      
    },
    file:''
  }
  
  

  constructor(private demandeMutationService: DemandemutationService,private personnelService:PersonnelService,private router:Router) { }

  ngOnInit(): void {
    this.getPersonnelList();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;
  
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      const cause: string  = this.cause ;
      const decision: string  = this.decision ;
      const datedemande: string = this.datedemande;
      //const selectedPersonnel : Personnel = this.selectedPersonnel;

      if (file) {
        this.currentFile = file;
  
        this.demandeMutationService.upload(this.currentFile,cause,decision,datedemande).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.demandeMutationService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
  
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
  
            this.currentFile = undefined;
          },
        });
      }
  
      this.selectedFiles = undefined;
    }
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

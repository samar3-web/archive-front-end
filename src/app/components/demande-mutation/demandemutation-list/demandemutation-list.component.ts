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
  mode = 'list';
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  cause! : string ;
  decision! : string ;
  datedemande! : string;

  fileInfos?: Observable<any>;

  name!: string;
  
  

  constructor(private demandeMutationService: DemandemutationService,private personnelService:PersonnelService,private router:Router) { }

  ngOnInit(): void {
    this.getPersonnelList();
    console.log("hhhhhhhhhhhhhh",this.personnelList);
    
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  onNewPersonnel(){
    if (this.mode != 'new-personnel') {
      this.mode = 'new-personnel';
    } else {
      this.mode = 'list';
    }
  }

  upload(): void {
    this.progress = 0;
  
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      const cause: string = this.cause;
      const decision: string = this.decision;
      const datedemande: string = this.datedemande;
      
      const selectedPersonnel: Personnel = this.selectedPersonnel;
  
      if (file && selectedPersonnel) {
        this.currentFile = file;
        const id: number | undefined = selectedPersonnel?.idPersonnel as number;
        
  
        this.demandeMutationService.upload(file, cause, decision, datedemande, id).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.demandeMutationService.getFiles();
            }
          },
          (error: any) => {
            console.log(error);
            this.progress = 0;
  
            if (error.error && error.error.message) {
              this.message = error.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
  
            this.currentFile = undefined;
          }
        );
      }
  
      this.selectedFiles = undefined;
    }
  }
  
  
  


  getPersonnelList(): void {
    this.personnelService.getPersonnelList().subscribe(
      (personnelList) => {
        this.personnelList = personnelList;
        console.log('gggggggggggggggg',personnelList)
      },
      (error) => {
        console.log(error);
        // Handle the error response
      }
    );
  }

  onCancel()
  {
    this.mode='list';
  }

  

  

}

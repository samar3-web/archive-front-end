import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Demandemutation } from 'src/app/classes/demandemutation';
import { Personnel } from 'src/app/classes/personnel';
import { DemandemutationService } from 'src/app/services/demandemutation.service';
import { PersonnelService } from 'src/app/services/personnel.service';



@Component({
  selector: 'app-demandemutation-ajout',
  templateUrl: './demandemutation-ajout.component.html',
  styleUrls: ['./demandemutation-ajout.component.css'],
})
export class DemandemutationAjoutComponent implements OnInit{
  pageOfItems!:Array<any>;
  mode='list';

  demandeMutation:Demandemutation={};
  personnelDto:Personnel={};
  listePersonnels:Array<Personnel>=[];
  demandemutationlist!:Demandemutation[];

  p:number=1;
  total:number=0;
  http: any;
  selectedFile: any;

  constructor(private router:Router,
    private demandeMutationService:DemandemutationService,
    private personnelService:PersonnelService,
    private toastService:ToastrService){}

    ngOnInit():void{
      this.personnelService.getPersonnelList().subscribe(personnels=>{
        this.listePersonnels=personnels;
      });

      this.getAllDemandesMutation();
    }

    getAllDemandesMutation(){
      this.demandeMutationService.getDemandeMutationList()
      .subscribe(data=>{
        this.demandemutationlist=data
      });
    }

    pageChangeEvent(event: number){
      this.p = event;
      this.getAllDemandesMutation();
    }

    onNewDemandeMutation(){
      if(this.mode != 'new-demande'){
        this.mode='new-demande';
      } else{
        this.mode='list';
      }
    }

    saveDemandeMutation():void{
      this.demandeMutation.personnel=this.personnelDto;
      this.demandeMutationService.createDemandeMutation(this.demandeMutation)
      .subscribe(data=>{
        console.log(data);
        const uploadData = new FormData();
    uploadData.append('pdfDM', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8083/apiDemandeMutation', uploadData).subscribe(() => {
      console.log('File uploaded successfully.');
    });
        this.goToDemandeMutationList();
        this.toastService.success('تم تسجيل المطلب بنجاح','مطلب جديد');
      },
      ex=>{
        console.log(ex);
        this.toastService.error('الرجاء التثبت في المعطيات','خطأ');
      });
    }

  Details(id:any){
    this.demandeMutationService.getId(id);
    this.router.navigateByUrl(`detaille-DemandeMutation/${id}`);
  }

  goToDemandeMutationList(){
    this.router.navigate(['home']);
    window.location.reload();
  }

  onDeleteDemandeMutation(id?:number){
    this.demandeMutationService.deleteDemandeMutation(id).subscribe();
    this.router.navigate(['home']);
    window.location.reload();
  }

  onSubmit(){
    console.log(this.demandeMutation);
    this.saveDemandeMutation();
  }

  onCancel(){
    this.mode='list';
  }

  updateDemandeMutationRecord(iddemandemutation?:number){
    console.log("id=",iddemandemutation);
    this.demandeMutationService.getId(iddemandemutation);
    this.router.navigate(['update-DemandeMutation']);
  }

  downloadFile() {
    this.http.get('http://localhost:8083/apiDemandeMutation', { responseType: 'blob' }).subscribe((response: Blob | MediaSource) => {
      const url = window.URL.createObjectURL(response);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'demande-mutation.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }

  onFileSelected(event: { target: { files: any[]; }; }) {
    this.selectedFile = event.target.files[0];
  }
  
 
}

import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personnel } from 'src/app/classes/personnel';
import { PersonnelService } from 'src/app/services/personnel.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-personnel-list',
  templateUrl: './personnel-list.component.html',
  styleUrls: ['./personnel-list.component.css']
})

export class PersonnelListComponent implements OnInit{
 

  onFileSelected(event: any) {
    const selectedFiles = event.target.files[0];
    const userName= this.pers.nom;
    const matricule=this.pers.matricule;
    const lastName=this.pers.pnom;
    const cin=this.pers.cin;
    const fileName=`${userName}${matricule}${lastName}${cin}`+'Personnel';
  }
  pageOfItems!: Array<Personnel>;
  mode = 'list';
  personnels!: Personnel[];
  filterTerm!: string;
  currentpers: Personnel={};
  currentIndex = -1;
  title = '';

  pers: Personnel={};
  p:number=1;
  total: number=0;
  constructor(private formBuilder: FormBuilder,private personnelService: PersonnelService,private router:Router){

  }
  ngOnInit(): void {
    this.getPersonnels();
  }

  private getPersonnels(){
    this.personnelService.getPersonnelList().subscribe(data=>{
      this.personnels=data;
      console.log(data);
    });
  }

  pageChangeEvent(event: number){
    this.p = event;
    this.getPersonnels();
  }

  onNewPersonnel(){
    if (this.mode != 'new-personnel') {
      this.mode = 'new-personnel';
    } else {
      this.mode = 'list';
    }
  }

  savePersonnel(){
    this.personnelService.createPersonnel(this.pers).subscribe(data=>{
      console.log(data);
      this.getPersonnels();
      });
  }

  OnDeletePersonnel(id?: number): void {
    if (id) {
      this.personnelService.deletePersonnel(id).subscribe(
        () => {
          this.router.navigate(['personnel']);
          console.log(id);
          window.location.reload();
        },
        (error) => {
          // Gérer l'erreur de suppression du personnel
          console.log(error);
        }
      );
    }
  }
  

  onSubmit(){
    console.log(this.pers);
    const formData: FormData = new FormData();
    this.savePersonnel();
    window.location.reload();


    
  }
  onCancel()
  {
    this.mode='list';
  }

  updateEmployeeRecord(matricule? : number){
    console.log("id = ", matricule);
    this.personnelService.getId(matricule);
    this.router.navigate(['personnel']);
  }

  personnelDetails(id:any){
    this.personnelService.getId(id);
    console.log("matricule=",id);
    this.router.navigateByUrl(`/detaille-personnel/${id}`);
  }

  goToPersonnelList(){
    this.router.navigate(['personnel']);
  }

  searchTitle(): void{
    this.currentpers = {};
    this.currentIndex = -1;
    this.personnelService.findBynom(this.title).subscribe({
      next : (data) => {
        this.personnels = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}

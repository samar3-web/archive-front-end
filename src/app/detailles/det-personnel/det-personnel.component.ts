import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-det-personnel',
  templateUrl: './det-personnel.component.html',
  styleUrls: ['./det-personnel.component.css']
})
export class DetPersonnelComponent implements OnInit {
  pers:any;

  constructor(private router:Router,
   private personnelService: PersonnelService,
   private route:ActivatedRoute){}

    ngOnInit():void{
      this.getById();
    }

    getById(){
      let id = this.route.snapshot.params['id'];
      this.personnelService.getPersonnelById(id).subscribe(res=>{
        console.log(res)
          this.pers = res
      });
    }

    retour(){
      this.router.navigate(['personnel'])
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Work } from 'src/app/model/work';
import { SWorkService } from 'src/app/service/work';

@Component({
  selector: 'app-editwork',
  templateUrl: './editwork.component.html',
  styleUrls: ['./editwork.component.css']
})
export class EditworkComponent implements OnInit{
  expLab: Work = null;

  constructor(private sWork: SWorkService, private activatedRouter: ActivatedRoute,  private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sWork.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }
  
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sWork.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

}


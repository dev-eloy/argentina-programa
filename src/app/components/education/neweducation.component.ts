import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducation.component.html',
  styleUrls: ['./neweducation.component.css']
})
export class NeweducationComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private educacionS: EducationService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Education(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
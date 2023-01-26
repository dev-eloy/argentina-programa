import { Component, OnInit } from '@angular/core';
import { SWorkService } from 'src/app/service/work';
import { TokenService } from 'src/app/service/token.service';
import { Work } from 'src/app/model/work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit{
  expe: Work[] = [];

  constructor(private sWork: SWorkService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
      } else {
        this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sWork.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sWork.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}

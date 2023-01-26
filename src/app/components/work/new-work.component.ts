import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Work } from 'src/app/model/work';
import { SWorkService } from 'src/app/service/work';

@Component({
  selector: 'app-new-work',
  templateUrl: './new-work.component.html',
  styleUrls: ['./new-work.component.css']
})
export class NewWorkComponent implements OnInit{
  nombreE: string = '';
  descripcionE:  string = '';

  constructor(private sWork: SWorkService, private router: Router){ }

  ngOnInit(): void {
      
  }

  OnCreate(): void{
    const expe = new Work(this.nombreE, this.descripcionE);
    this.sWork.save(expe).subscribe(data =>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
      }, err =>{
        this.router.navigate(['']);
      }
      )
    }
  }
    



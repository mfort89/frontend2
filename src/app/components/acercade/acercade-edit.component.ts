import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-acercade-edit',
  templateUrl: './acercade-edit.component.html',
  styleUrls: ['./acercade-edit.component.css']
})

export class AcercadeEditComponent implements OnInit {
persona: Persona =  null;
  
  constructor(private personaService: PersonaService,
     private activatedRoute: ActivatedRoute, 
     private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }   
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.showSuccess();
        this.router.navigate(['']);
  }, err => {
    this.showError();
    this.router.navigate(['']);
  }
    )
  }

   showError(){
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      html: 'No pudo modificarse la <b>persona</b>',
      showConfirmButton: false,
      timer: 2500
    })
   }
   showSuccess(){
    Swal.fire({
      icon:'success',
      title: '¡Persona Modificada con exito!',
      showConfirmButton: false,
      timer: 2500
   })
  
}

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion-new',
  templateUrl: './educacion-new.component.html',
  styleUrls: ['./educacion-new.component.css']
})
export class EducacionNewComponent implements OnInit {
  tituloEd: string = "";
  institucion: string = "";
  fechaInicio: number =  null ;
  fechaFin: number =  null;
  descripcionEd: string = "";

  constructor(private educacionService: EducacionService, private router: Router){}

  ngOnInit(): void{

  }
  onCreate(): void{
    const educacion = new Educacion(this.tituloEd, this.institucion, this.fechaInicio, this.fechaFin, this.descripcionEd);
    this.educacionService.save(educacion).subscribe(
      data => {
        this.showSuccess();
        this.router.navigate(['']);
  }, err => {
    this.showError();
    this.router.navigate(['']);
  })
}

showError(){
  Swal.fire({
    icon:'error',
    title:'Error',
    html:'No pudo añadirse la <b>educacion</b>',
    showConfirmButton: false,
    timer: 2500
  })


}
showSuccess(){
  Swal.fire({
    icon:'success',
    title: '¡Educacion se añadio!',
    showConfirmButton: false,
    timer: 2500

  })
}
}